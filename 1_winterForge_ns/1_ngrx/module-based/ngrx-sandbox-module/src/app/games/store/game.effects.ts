import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as GamesActions from './games.actions';
import { GamesService } from '../games.service';
import { of } from 'rxjs';

@Injectable()
export class GamesEffects {
  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.loadGames),
      mergeMap((action) =>
        this.gamesService.fetchGames(action.pageNumber, action.pageSize).pipe(
          map((gamesData) => GamesActions.loadGamesSuccess({ gamesData })),
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
