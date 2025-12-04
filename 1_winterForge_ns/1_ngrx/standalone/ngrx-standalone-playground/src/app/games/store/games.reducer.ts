import { createReducer, on } from '@ngrx/store';
import { initialState } from './games.state';
import * as GamesActions from './games.actions';

export const gamesReducer = createReducer(
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
