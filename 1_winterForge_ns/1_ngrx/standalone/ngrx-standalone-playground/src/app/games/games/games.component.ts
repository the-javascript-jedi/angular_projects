import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import * as GamesActions from '../store/games.actions';
import {
  selectGamesWithPlatform,
  selectGamesLoading,
} from '../store/games.selectors';
import { Game } from '../store/games.state';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit {
  games$: Observable<Game[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.games$ = this.store.select(selectGamesWithPlatform);
    this.loading$ = this.store.select(selectGamesLoading);
  }

  ngOnInit() {
    this.store.dispatch(
      GamesActions.loadGames({ pageNumber: 0, pageSize: 10 })
    );
    this.store.dispatch(GamesActions.loadGamePlatform());
  }
}
