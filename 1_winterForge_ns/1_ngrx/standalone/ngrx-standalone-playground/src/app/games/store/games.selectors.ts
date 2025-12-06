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

export const selectPlatform = createSelector(
  selectGamesState,
  (state) => state.platform
);

// Combined selector: merges games with platform
export const selectGamesWithPlatform = createSelector(
  selectGamesData,
  selectPlatform,
  (games, platform) =>
    games.map((game) => ({
      ...game,
      platform: platform || 'N/A',
    }))
);
