import { createSelector ,createFeatureSelector} from "@ngrx/store";
import { AuthState } from "./reducers";

//access only a particular part of the state using createFeatureSelector
export const selectAuthState= createFeatureSelector<AuthState>("auth");

// we negate the function to see if user is logged in
// selector is recalculated only if input changes
export const isLoggedIn=createSelector(
    selectAuthState,
    (auth)=>!!auth.user
)

export const isLoggedOut=createSelector(
    isLoggedIn,
    (isLoggedIn)=>!isLoggedIn
)