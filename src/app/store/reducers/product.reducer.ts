import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import * as ProductActions from 'src/app/store/actions/product.actions';

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ProductActions.loadProduct, (state) => ({ ...state, loading: true })),
  on(ProductActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    selectedProduct: product,
  })),
  on(ProductActions.loadProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
