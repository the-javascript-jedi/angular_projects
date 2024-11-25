import { createFeature, createReducer, on } from "@ngrx/store"
import { PopularTagsStateInterface } from "../types/popularTagsState.interface"
import { popularTagsAction } from "./action"

const initialState: PopularTagsStateInterface = {
  isLoading:false,
  error:null,
  data:null
}
const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    // tag actions
    on(popularTagsAction.getPopularTags, (state) => ({...state, isLoading: true})),
    on(popularTagsAction.getPopularTagsSuccess, (state,action) => ({...state, isLoading: false,data:action.popularTags})),
    on(popularTagsAction.getPopularTagsFailure, (state,action) => {
      console.log("action",action)  
      return {...state, isLoading: false}
    }),
  ),
})
// selectors that are automatically generated when using createFeature and createReducer in NgRx.
export const {
  name: popularTagsFeatureKey,// Key for the state slice
  reducer: popularTagsReducer,  // Reducer for the state slice
  selectIsLoading, //selectIsLoading maps to state.popularTags.isLoading.// Selector for isLoading
  selectError, //selectError maps to state.popularTags.error.// Selector for error
  selectData:selectPopularTagsData //selectData maps to state.popularTags.data.// Selector for data, renamed
} = popularTagsFeature