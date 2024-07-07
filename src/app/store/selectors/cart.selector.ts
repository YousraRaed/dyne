// src/app/store/selectors/cart.selector.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.cartItems
);

export const selectCartError = createSelector(
  selectCartState,
  (state: CartState) => state.error
);

export const selectTotalCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.totalCartItems
);
export const selectOrder = createSelector(
  selectCartState,
  (state: CartState) => state.order
);
export const selectAmount = createSelector(
  selectCartState,
  (state: CartState) => state.totalAmount
);
