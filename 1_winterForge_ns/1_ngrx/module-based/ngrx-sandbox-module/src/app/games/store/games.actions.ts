import { createAction, props } from '@ngrx/store';
import { Game } from './games.state';

export const loadGames = createAction(
  '[Games] Load Games',
  props<{ pageNumber: number; pageSize: number }>()
);

export const loadGamesSuccess = createAction(
  '[Games] Load Games Success',
  props<{ gamesData: Game[] }>()
);

export const loadGamesFailure = createAction(
  '[Games] Load Games Failure',
  props<{ error: string }>()
);
