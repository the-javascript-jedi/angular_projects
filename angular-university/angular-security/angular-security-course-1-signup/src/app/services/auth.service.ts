import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

import {shareReplay, filter, tap, map} from 'rxjs/operators';
// undefined user when no user is logged in
export const ANONYMOUS_USER:User={
  id:undefined,
  email:''
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // initialize the user as undefined
   private subject = new BehaviorSubject<User>(undefined);
  // only emit values which have user
 user$: Observable<User> = this.subject.asObservable().pipe(filter(user => !!user));
  // user$:Observable<User>=this.subject.asObservable().do(user=>!!user)
  // use !! to check the truthiness
 isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(private http:HttpClient) { 
      // if we get response set the user data or if no data set as ANONYMOUS_USER
       http.get<User>('/api/user').pipe(
            tap(console.log))
            .subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER));
  }
  // shareReplay- caching of http requests - resulting observable is retryable but resultin http post is still being cached
  signUp(email:string,password:string){
   return this.http.post<User>('/api/signup', {email, password}).pipe(
            shareReplay(),
            tap(user => this.subject.next(user)),);
  }

  logout():Observable<any>{
    // return this.http.post('/api/logout',null).shareReplay().do(user=>this.subject.next(ANONYMOUS_USER));
         return this.http.post('/api/logout', null).pipe(
            shareReplay(),
            tap(user => this.subject.next(ANONYMOUS_USER)),);
  }
}
