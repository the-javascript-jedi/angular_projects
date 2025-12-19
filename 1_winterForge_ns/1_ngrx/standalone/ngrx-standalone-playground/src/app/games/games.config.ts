import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { gamesReducer } from './store/games.reducer';
import { GamesEffects } from './store/games.effects';

export const gamesProviders = [
  provideState('gamesData', gamesReducer),
  provideEffects(GamesEffects),
];
