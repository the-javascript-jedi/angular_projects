import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesState } from './games.state';

export const selectGamesState = createFeatureSelector<GamesState>('gamesData');

export const selectGamesData = createSelector(
  selectGamesState,
  (state) => state.gamesData
);

export const selectGamesLoading = createSelector(
  selectGamesState,
  (state) => state.loading
);
