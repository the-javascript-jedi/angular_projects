import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

// undefined user when no user is logged in
export const ANONYMOUS_USER:User={
  id:undefined,
  email:''
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject=new BehaviorSubject<User>(ANONYMOUS_USER)
  user$:Observable<User>=this.subject.asObservable();
  // use !! to check the truthiness
  isLoggedIn$:Observable<boolean>=this.user$.map(user=>!!user.id);

  isLoggedOut$:Observable<boolean>=this.isLoggedIn$.map(isLoggedIn=>!isLoggedIn);

  constructor(private http:HttpClient) { 

  }
  // shareReplay- caching of http requests - resulting observable is retryable but resultin http post is still being cached
  signUp(email:string,password:string){
    return this.http.post<User>("/api/signup",{
      email,password
    }).shareReplay()
    // broadcast to all instances
    .do(user=>this.subject.next(user))
  }
}
