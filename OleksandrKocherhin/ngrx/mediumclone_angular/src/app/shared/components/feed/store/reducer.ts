import { createFeature, createReducer, on } from "@ngrx/store"
import { FeedStateInterface } from "../types/feedState.interface"
import { feedActions } from "./action"
import { routerNavigatedAction } from "@ngrx/router-store"

const initialState: FeedStateInterface = {
  isLoading:false,
  error:null,
  data:null
}
const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    // feed state
    on(feedActions.getFeed, (state) => ({...state, isLoading: true})),
    on(feedActions.getFeedSuccess, (state,action) => ({...state, isLoading: false,data:action.feed})),
    on(feedActions.getFeedFailure, (state,action) => {
      console.log("action",action)  
      return {...state, isLoading: false}
    }),
    // on navigation reset the state
    on(routerNavigatedAction,()=>initialState)
  ),
})

export const{
    name:feedFeatureKey,
    reducer:feedReducer,
    selectIsLoading,
    selectError,
    selectData:selectFeedData
}=feedFeature;