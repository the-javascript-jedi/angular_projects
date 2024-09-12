import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';
export interface AuthState {
  user:User
}
// intially state is undefined
export const initialAuthState:AuthState={
  user:undefined
}
// now reducer will update the state
export const authReducer=createReducer(
  initialAuthState,
  on(AuthActions.login,(state,action)=>{
    return{
      user:action.user
    }
  })
)