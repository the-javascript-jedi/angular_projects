import {createFeature, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import {authActions} from './actions'
import { routerNavigatedAction } from '@ngrx/router-store'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading:false,
  currentUser:undefined,
  validationErrors:null
}
const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    // register state
    on(authActions.register, (state) => ({...state, isSubmitting: true,validationErrors:null})),
    on(authActions.registerSuccess, (state,action) => ({...state, isSubmitting: false,currentUser:action.currentUser})),
    on(authActions.registerFailure, (state,action) => {
      console.log("action",action)  
      return {...state, isSubmitting: false,validationErrors:action.errors}
    }),
    // login state
    on(authActions.login, (state) => ({...state, isSubmitting: true,validationErrors:null})),
    on(authActions.loginSuccess, (state,action) => ({...state, isSubmitting: false,currentUser:action.currentUser})),
    on(authActions.loginFailure, (state,action) => {
      console.log("action",action)  
      return {...state, isSubmitting: false,validationErrors:action.errors}
    }),
    // on router navigation remove the errors by changing the state of validationErrors
    on(routerNavigatedAction,(state)=>({...state,validationErrors:null})),
    // current user
    on(authActions.getCurrentUser, (state) => ({...state, isLoading: true})),
    on(authActions.getCurrentUserSuccess, (state,action) => ({...state, isLoading: false,currentUser:action.currentUser})),
    on(authActions.getCurrentUserFailure, (state) => {
      // set the currentUser value to null
      return {...state, isLoading: false,currentUser:null}
    }),
  ),
})
// selectors that are automatically generated when using createFeature and createReducer in NgRx.
export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors
} = authFeature