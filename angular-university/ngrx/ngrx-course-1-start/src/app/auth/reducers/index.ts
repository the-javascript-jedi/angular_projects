import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export const authFeatureKey = 'auth';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {

};


// export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
