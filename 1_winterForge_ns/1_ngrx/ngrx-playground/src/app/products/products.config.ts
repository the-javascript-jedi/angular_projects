import { provideState } from '@ngrx/store';
import { productsReducer } from './store/products.reducer';

export const productsProviders = [provideState('products', productsReducer)];
