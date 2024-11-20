import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {AuthService} from '../services/auth.service'
import {authActions} from './actions'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../services/persistance.service'
import { Router } from '@angular/router'

// get current user effect
export const getCurrentUserEffect = createEffect(
  // inject services to make api calls
  (actions$ = inject(Actions), authService = inject(AuthService) , persistenceService=inject(PersistenceService)) => {
    return actions$.pipe(
      ofType(authActions.getCurrentUser),
      switchMap(() => {
        // check if token is present, if no token dispatch failure action
        const token=persistenceService.get('accessToken');
        if(!token){
            return of(authActions.getCurrentUserFailure());
        }

        // use service and make api calls
        return authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            // save data to local storage using effects
            return authActions.getCurrentUserSuccess({currentUser})
          }),
          // no backend errors so we dont need to pass anything
          catchError(() => {
            return of(authActions.getCurrentUserFailure())
          })
        )
      })
    )
  },
  {functional: true}
)


// register effect
export const registerEffect = createEffect(
  // inject services to make api calls
  (actions$ = inject(Actions), authService = inject(AuthService) , persistenceService=inject(PersistenceService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({request}) => {
        // use service and make api calls
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            // save data to local storage using effects
            persistenceService.set('accessToken',currentUser.token)
            return authActions.registerSuccess({currentUser})
          }),
          catchError((errorResponse:HttpErrorResponse) => {
            console.log("errorResponse",errorResponse)
            return of(authActions.registerFailure(errorResponse.error))
          })
        )
      })
    )
  },
  {functional: true}
)


/* redirecton effect 
here we keep the dispatch as false - only we are doing routing no actions are dispatched
*/
// on Register Success dispatch an effect to navigate to the home page
export const redirectAfterRegisterEffect=createEffect(
  (action$=inject(Actions),router=inject(Router))=>{
    return action$.pipe(
      ofType(authActions.registerSuccess),
      tap(()=>{
        router.navigateByUrl('/')
      })
    )
  },{functional:true,dispatch:false})

  // login effect
  export const loginEffect = createEffect(
  // inject services to make api calls
  (actions$ = inject(Actions), authService = inject(AuthService) , persistenceService=inject(PersistenceService)) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({request}) => {
        // use service and make api calls
        return authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            // save data to local storage using effects
            persistenceService.set('accessToken',currentUser.token)
            // call the login success action
            return authActions.loginSuccess({currentUser})
          }),
          catchError((errorResponse:HttpErrorResponse) => {
            console.log("errorResponse",errorResponse)
            // call the register failiure action
            return of(authActions.loginFailure(errorResponse.error))
          })
        )
      })
    )
  },
  {functional: true}
)


/* redirecton effect 
here we keep the dispatch as false - only we are doing routing no actions are dispatched
*/
// on Login Success dispatch an effect to navigate to the home page
export const redirectAfterLoginEffect=createEffect(
  (action$=inject(Actions),router=inject(Router))=>{
    return action$.pipe(
      ofType(authActions.loginSuccess),
      tap(()=>{
        router.navigateByUrl('/')
      })
    )
  },{functional:true,dispatch:false})
