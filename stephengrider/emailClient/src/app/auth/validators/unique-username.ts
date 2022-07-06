import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";
import { AsyncValidator,FormControl } from "@angular/forms";
import { map,catchError, of } from "rxjs";
// we add @Injectable to enable class to add dependency injection for HttpClient
@Injectable({
    providedIn:'root'
})
export class UniqueUsername implements AsyncValidator {
    constructor(private authService:AuthService){}
    // use arrow function to overcome binding this
    validate=(control:FormControl)=>{
        const {value}=control;
        return this.authService.usernameAvailable(value).pipe(
            map((value)=>{
                // if username is available
                console.log("value",value);
                if(value.available){
                    return null;
                }
            }),
            // catcherror must always return an observable
            catchError((err)=>{
                console.log("err",err);
                // of is used to create an observable
                if(err.error.username){
                    return of({nonUniqueUsername:true});
                }else{
                    return of({noConnection:true})
                }
            })
        )
        // console.log("value",this.http);
        // return null;
    }
}
