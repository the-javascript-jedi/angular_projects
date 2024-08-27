import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { register } from "./actions";

const initialState:AuthStateInterface={
    isSubmitting:false
}
// always spread the state and update it
const authFeature=createFeature({
    name:'auth',
    reducer:createReducer(
        initialState,
        on(register,(state)=>({...state,isSubmitting:true}))
    )
})
// The name of the feature, extracted from authFeature
// The reducer function for this feature, also extracted from authFeature.
// Since createFeature ensures that both name and reducer are part of the returned object, destructuring them doesn’t result in any undefined values, which is why no error is triggered.
export const {name:authFeatureKey,reducer:authReducer}=authFeature;