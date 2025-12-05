import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import * as GamesActions from './games.actions';
import { GamesService } from '../games.service';
import { forkJoin, of } from 'rxjs';
import { Game, GamePlatform } from './games.state';

@Injectable()
export class GamesEffects {
  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.loadGames),
      // Use `mergeMap` so multiple concurrent `loadGames` actions can run in parallel.
      // Alternatives:
      // - `concatMap`: queues actions and runs them sequentially (one at a time)
      // - `switchMap`: cancels the previous request when a new action arrives
      // - `exhaustMap`: ignores new actions while a request is in-flight
      mergeMap((action) =>
        // `forkJoin` runs the inner observables in parallel and emits a single
        // object with the last value from each when ALL of them complete.
        // Note: if any inner observable errors, `forkJoin` errors too unless you
        // handle errors for that inner observable (e.g. use `catchError` inside it).
        forkJoin({
          games: this.gamesService.fetchGames(
            action.pageNumber,
            action.pageSize
          ),
          gamePlatform: this.gamesService
            .fetchGamePlatform()
            .pipe(catchError(() => of({ platform: 'unknown' }))),
        }).pipe(
          tap(({ games, gamePlatform }) => {
            console.log('games', games);
            console.log('gamePlatform', gamePlatform);
            if (games.length && gamePlatform) {
              games.forEach((game: Game) => {
                game.platform = gamePlatform.platform;
              });
            }
          }),
          map(({ games }) =>
            GamesActions.loadGamesSuccess({ gamesData: games })
          ),
          catchError((err) =>
            of(
              GamesActions.loadGamesFailure({
                error: err.message ?? 'API Error',
              })
            )
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private gamesService: GamesService) {}
}
