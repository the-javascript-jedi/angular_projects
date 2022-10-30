
import {filter} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject} from "rxjs";
import {User} from "../model/user";
import * as auth0 from 'auth0-js';
import {Router} from "@angular/router";
import * as moment from 'moment';
import { pluck, share, shareReplay, tap } from 'rxjs/operators';


export const ANONYMOUS_USER: User = {
    id: undefined,
    email: ''
};

const AUTH_CONFIG = {
    clientID: 'zhmLLjrywFQMVWUeX7a5QPdvDO1EhcUH',
    domain: "dev-dx0qnuzz2587jw5i.us.auth0.com"
};


@Injectable()
export class AuthService {
    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.clientID,
        domain: AUTH_CONFIG.domain,
        responseType: 'token id_token',
        redirectUri: 'https://localhost:4200/lessons',
        // ask for email
        scope:'openid email'
    });
    // used to emit the user preferences after the put call
    private userSubject = new BehaviorSubject<User>(undefined);
    user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user));
    constructor(private http: HttpClient, private router: Router) {  
        // whenever user is logged in and already json web token is present and we want to fetch the user info at startup time
        // if the user has a valid jwt token that has not yet expired
        if(this.isLoggedIn()){
            // trigger the user info call and fetch the user preferences from backend
            this.userInfo();
        }
    }

    login() {
        this.auth0.authorize({initialScreen:'login'});
    }

    signUp() {
        this.auth0.authorize({initialScreen:'signUp'});
    }

    retrieveAuthInfoFromUrl(){
        // this will do all the processing of hash this will give the result of the authentication operation or an error in case an error occured
        this.auth0.parseHash((err,authResult)=>{
            // error
            if(err){
                console.log("Could not parse the hash",err);
            }else if(authResult&&authResult.idToken){
                 // clear the hash on successful login
                 window.location.hash='';
                 // no error - valid authentication scenario
                console.log("Authentication Succesful, authResult:", authResult);
                this.setSession(authResult);
                // We want to make sure that users sign up at user login. And whenever the user refresh is the application and is already logged in, we want to make sure that we fetch from the backend, the user preferences.
                //send rquest to server
                this.userInfo();
            }            
        });
    }
    // we call the userinfo method whenever we login the user and whenever we register the new user
    userInfo(){
        // we are passing null since the json web token already contains the email
        this.http.put<User>('/api/userinfo',null).pipe(shareReplay(),tap(user=>this.userSubject.next(user))).subscribe();
    }
    logout() {
        // remove the local storage tokens
        localStorage.removeItem('id_token');
        localStorage.removeItem("expires_at");
        this.router.navigate(['/lessons']);
    }
    // check if token is expired or not - check made from html
    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
        // helper to use anywhere else
    getExpiration(){
        const expiration=localStorage.getItem("expires_at");
        const expiresAt=JSON.parse(expiration);
        return moment(expiresAt);
    }
    // store in local storage
    private setSession(authResult){
        // expiresIn: 7200
        const expiresAt=moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token',authResult.idToken);
        localStorage.setItem('expires_at',JSON.stringify(expiresAt.valueOf()))
    }
}