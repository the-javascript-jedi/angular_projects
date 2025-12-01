import { createAction, props } from '@ngrx/store';
import { Product } from './products.state';

export const addProduct = createAction(
  '[Products] Add Product',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Products] Remove Product',
  props<{ id: number }>()
);
