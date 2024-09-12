import { createSelector } from "@ngrx/store";

// we negate the function to see if user is logged in
// selector is recalculated only if input changes
export const isLoggedIn=createSelector(
    state=>state["auth"],
    (auth)=>!!auth.user
)

export const isLoggedOut=createSelector(
    isLoggedIn,
    (isLoggedIn)=>!isLoggedIn
)