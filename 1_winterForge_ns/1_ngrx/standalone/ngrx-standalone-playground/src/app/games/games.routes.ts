import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { gamesProviders } from './games.config';

export const GAMES_ROUTES: Routes = [
  {
    path: '',
    component: GamesComponent,
    providers: gamesProviders,
  },
];
