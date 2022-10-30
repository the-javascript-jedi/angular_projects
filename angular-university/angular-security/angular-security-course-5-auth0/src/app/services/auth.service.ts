
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

    logout() {
    }

    public isLoggedIn() {
        return false;
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
}