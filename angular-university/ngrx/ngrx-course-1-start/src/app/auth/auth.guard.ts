import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { select, Store } from "@ngrx/store";
import { isLoggedIn } from "./auth.selector";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private store:Store<AppState>,private router:Router){}

    // router will complete the route transaction only if it receives a value from Observable as true
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
        // check if user is logged in
        // return if the user is logged in, if not logged in use the tap side effect and naviagte to anotehr page
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn=>{
                if(!loggedIn){
                    this.router.navigateByUrl("/login")
                }
            })
        )
    }
}