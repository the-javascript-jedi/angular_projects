import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { RegisterRequestInterface } from "../auth/types/registerRequest.interface";
import { map, Observable } from "rxjs";
import { CurrentUserInterface } from "../shared/types/currentUser.interface";
import { AuthResponseInterface } from "../auth/types/authResponse.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:"root"
})
export class AuthService{
    constructor(private http:HttpClient){}

    register(data:RegisterRequestInterface):Observable<CurrentUserInterface>{
        // const url="https://api.realworld.io/api/users";
        const url=environment.apiUrl+"/users";
        return this.http.post<AuthResponseInterface>(url,data).pipe(map((response)=>response.user))
    }
}