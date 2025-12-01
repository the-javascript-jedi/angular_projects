export interface Product {
  id: number;
  name: string;
}

export interface ProductsState {
  products: Product[];
}

export const initialState: ProductsState = {
  products: [],
};
