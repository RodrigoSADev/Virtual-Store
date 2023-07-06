import { ActionReducerMap } from '@ngrx/store';
import { ProductState, productReducer } from './reducers/product.reducer';
import { ProductEffects } from './effects/product.effect';

export interface AppState {
  product: ProductState;
}

export const appReducer: ActionReducerMap<AppState> = {
  product: productReducer,
};

export const appEffects = [ProductEffects];
