import { createReducer, on } from '@ngrx/store';
import { CartModel } from '../../models/cart';
import { ItemModel } from '../../models/item';
import {
  addItemToCart,
  postCartSuccess,
  postCartFailure,
  removeItemfromCart,
} from '../actions/cart.action';

export interface CartState {
  cartItems: { item: ItemModel; quantity: number }[];
  totalCartItems: number;
  error: any;
  order: CartModel[];
  totalAmount: number;
}

export const initialState: CartState = {
  cartItems: [],
  totalCartItems: 0,
  error: null,
  order: [],
  totalAmount: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { cartItem }) => {
    const existingCartItem = state.cartItems.find(
      (item) => item.item.id === cartItem.item.id
    );
    let updatedCartItems;

    if (existingCartItem) {
      updatedCartItems = state.cartItems.map((item) =>
        item.item.id === cartItem.item.id
          ? {
              ...item,
              quantity: (item.quantity ?? 0) + (cartItem.quantity ?? 0),
            }
          : item
      );
    } else {
      updatedCartItems = [
        ...state.cartItems,
        { ...cartItem, quantity: cartItem.quantity ?? 1 },
      ];
    }
    const order: CartModel[] = updatedCartItems.map((item) => ({
      itemId: item.item.id ?? 0,
      quantity: item.quantity,
    }));
    const totalAmount = updatedCartItems.reduce(
      (acc, item) => acc + (item?.item?.price ?? 0) * (item.quantity ?? 1),
      0
    );
    return {
      ...state,
      cartItems: updatedCartItems,
      totalCartItems: state.totalCartItems + 1,
      order,
      totalAmount,
    };
  }),

  on(removeItemfromCart, (state, { cartItem }) => {
    const updatedCartItems = state.cartItems
      .map((item) =>
        item.item.id === cartItem.item.id
          ? { ...item, quantity: (item.quantity ?? 0) - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    const order: CartModel[] = updatedCartItems.map((item) => ({
      itemId: item.item.id ?? 0,
      quantity: item.quantity,
    }));

    const totalAmount = updatedCartItems.reduce(
      (acc, item) => acc + (item?.item?.price ?? 0) * (item.quantity ?? 1),
      0
    );

    return {
      ...state,
      cartItems: updatedCartItems,
      totalCartItems: state.totalCartItems - 1,
      order,
      totalAmount,
    };
  }),
  on(postCartSuccess, (state) => {
    return {
      ...state,
      cartItems: [],
      error: null,
      totalCartItems: 0,
      order: [],
      totalAmount: 0,
    };
  }),
  on(postCartFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
