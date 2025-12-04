import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as GamesActions from './games.actions';
import { GamesService } from '../games.service';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private gamesService: GamesService) {}

  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.loadGames),
      mergeMap((action) =>
        this.gamesService.fetchGames(action.pageNumber, action.pageSize).pipe(
          map((gamesData) => GamesActions.loadGamesSuccess({ gamesData })),
          catchError((error) =>
            of(
              GamesActions.loadGamesFailure({
                error: error.message || 'Unknown error occurred',
              })
            )
          )
        )
      )
    )
  );
}
