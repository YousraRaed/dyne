// src/app/store/actions/cart.actions.ts
import { createAction, props } from '@ngrx/store';
import { CartModel } from '../../models/cart';
import { ItemModel } from '../../models/item';

export const addItemToCart = createAction(
  '[Cart] Add Item to Cart',
  props<{ cartItem: { item: ItemModel; quantity: number } }>()
);
export const removeItemfromCart = createAction(
  '[Cart] remove Item from Cart',
  props<{ cartItem: { item: ItemModel } }>()
);
export const postCart = createAction('[Cart] Post Cart');
export const postCartSuccess = createAction('[Cart] Post Cart Success');
export const postCartFailure = createAction(
  '[Cart] Post Cart Failure',
  props<{ error: any }>()
);
