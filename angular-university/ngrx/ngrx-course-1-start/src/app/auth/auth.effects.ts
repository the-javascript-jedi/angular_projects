import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";
import { dispatch } from "rxjs/internal/observable/pairs";

@Injectable()
export class AuthEffects{
      login$=createEffect(()=>
            this.action$.pipe(
                //using ofType to filter out only necessary actions
                ofType(AuthActions.login),
                tap(action=>localStorage.setItem('user',JSON.stringify(action.user)))
            ),{dispatch:false}
        )

    constructor(private action$:Actions){
        // APPROACH 1
        // action$.subscribe(action=>{
        //     if(action.type=='[Login Page] User Login'){
        //         localStorage.setItem('user',JSON.stringify(action["user"]))
        //     }
        // })
        
        // APPROACH 2
       
    }
}