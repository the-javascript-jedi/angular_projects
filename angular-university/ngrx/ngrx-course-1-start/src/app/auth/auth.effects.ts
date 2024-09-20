import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";
import { dispatch } from "rxjs/internal/observable/pairs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects{
      login$=createEffect(()=>
            this.action$.pipe(
                //using ofType to filter out only necessary actions
                ofType(AuthActions.login),
                tap(action=>localStorage.setItem('user',JSON.stringify(action.user)))
            ),{dispatch:false}
        )

        logout$=createEffect(()=>
            this.action$.pipe(
                ofType(AuthActions.logout),
                tap(action=>{
                    localStorage.removeItem('user');
                    this.router.navigateByUrl('login')
                })
            ),
            {dispatch:false}
        )
    
    constructor(private action$:Actions,private router:Router){
        // APPROACH 1
        // action$.subscribe(action=>{
        //     if(action.type=='[Login Page] User Login'){
        //         localStorage.setItem('user',JSON.stringify(action["user"]))
        //     }
        // })
        
        // APPROACH 2
       
    }
}