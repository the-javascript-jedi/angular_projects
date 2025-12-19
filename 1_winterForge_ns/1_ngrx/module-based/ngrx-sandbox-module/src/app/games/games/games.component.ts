import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as GamesActions from '../store/games.actions';
import { selectGamesData, selectGamesLoading } from '../store/games.selectors';
import { Game } from '../store/games.state';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit {
  games$: Observable<Game[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.games$ = this.store.select(selectGamesData);
    this.loading$ = this.store.select(selectGamesLoading);
  }

  ngOnInit() {
    this.store.dispatch(
      GamesActions.loadGames({ pageNumber: 0, pageSize: 10 })
    );
  }
}
