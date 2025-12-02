import { createReducer, on, Action } from '@ngrx/store';
import { initialState, ProductsState } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
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

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
