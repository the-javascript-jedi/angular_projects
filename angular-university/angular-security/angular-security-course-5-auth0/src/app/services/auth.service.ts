
import {filter} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject} from "rxjs";
import {User} from "../model/user";
import * as auth0 from 'auth0-js';
import {Router} from "@angular/router";

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
        redirectUri: 'https://localhost:4200/lessons'
    });

    private userSubject = new BehaviorSubject<User>(undefined);
    user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user));
    constructor(private http: HttpClient, private router: Router) {    }

    login() {
        this.auth0.authorize();
    }

    signUp() {
    }

    retrieveAuthInfoFromUrl(){
        // this will do all the processing of hash this will give the result of the authentication operation or an error in case an error occured
        this.auth0.parseHash((err,authResult)=>{
            // error
            if(err){
                console.log("Could not parse the hash",err);
                return;
            }
            // no error - valid authentication scenario
            console.log("Authentication Succesful, authResult:", authResult);
            // get more user info
            this.auth0.client.userInfo(authResult.accessToken,(err,userProfile)=>{
                console.log("userProfile",userProfile)
            })
        });
    }
    logout() {
    }

    public isLoggedIn() {
        return false;
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
}