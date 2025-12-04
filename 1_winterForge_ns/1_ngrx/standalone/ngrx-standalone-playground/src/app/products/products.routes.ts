import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { productsProviders } from './products.config';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
    providers: productsProviders,
  },
];
