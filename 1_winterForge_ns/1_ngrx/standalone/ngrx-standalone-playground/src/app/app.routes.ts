import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then((m) => m.PRODUCTS_ROUTES),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./games/games.routes').then((m) => m.GAMES_ROUTES),
  },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
];
