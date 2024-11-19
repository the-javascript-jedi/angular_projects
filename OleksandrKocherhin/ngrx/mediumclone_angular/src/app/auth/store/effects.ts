import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {AuthService} from '../services/auth.service'
import {authActions} from './actions'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../services/persistance.service'
import { Router } from '@angular/router'

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

