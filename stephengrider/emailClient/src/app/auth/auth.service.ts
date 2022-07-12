import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailableResponse{
  available:boolean;
}
interface SignupCredentials{
  username:string;
  password:string;
  passwordConfirmation:string;
}

interface SignupResponse{
  username:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl='https://api.angular-email.com';
  signedin$=new BehaviorSubject(false);
  constructor(private http:HttpClient) { }

  usernameAvailable(username:string){
      return this.http.post<UsernameAvailableResponse>(this.rootUrl+'/auth/username',{
            username:username
      })
  }

  signup(credentials:SignupCredentials){
    // add withCredentials:true to consider cookie
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`,credentials,{
      withCredentials:true
    }).pipe(
      // error will akip the tap
      tap(()=>{
      this.signedin$.next(true);
    }))
  }

  checkAuth(){
    // add withCredentials:true to consider cookie
    return this.http.get(`${this.rootUrl}/auth/signedin`,{
      withCredentials:true
    }).pipe(
      tap(response=>{
        console.log('checkAuth--response',response);
      })
    )
  }
}
