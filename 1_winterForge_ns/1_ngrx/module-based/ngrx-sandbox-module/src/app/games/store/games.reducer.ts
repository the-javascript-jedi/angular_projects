import { Action, createReducer, on } from '@ngrx/store';
import { GamesState, initialState } from './games.state';
import * as GamesActions from './games.actions';

const reducer = createReducer(
  initialState,

  on(GamesActions.loadGames, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(GamesActions.loadGamesSuccess, (state, { gamesData }) => ({
    ...state,
    gamesData,
    loading: false,
  })),

  on(GamesActions.loadGamesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function gamesReducer(state: GamesState | undefined, action: Action) {
  return reducer(state, action);
}
