import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AppState } from './reducers';
import { isLoggedIn, isLoggedOut } from './auth/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loading = true;

    isLoggedIn$:Observable<boolean>;
    isLoggedOut$:Observable<boolean>;

    constructor(private router: Router,private store:Store<AppState>) {
      // this.router.events.subscribe(event=>{...})
      this.store.subscribe(state=>console.log("store value",state))
    }

    ngOnInit() {

      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });

      this.isLoggedIn$=this.store.pipe(
        // map(state=>!!state["auth"].user)
        select(isLoggedIn)
      )

      this.isLoggedOut$=this.store.pipe(
        // map(state=>!state["auth"].user)
        select(isLoggedOut)
      )
    }

    logout() {

    }

}
