import { createReducer, on } from '@ngrx/store';
import { initialState } from './products.state';
import * as ProductsActions from './products.actions';

export const productsReducer = createReducer(
  initialState,

  on(ProductsActions.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),

  on(ProductsActions.removeProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== id),
  }))
);
