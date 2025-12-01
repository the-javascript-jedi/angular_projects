import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then((m) => m.PRODUCTS_ROUTES),
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];
