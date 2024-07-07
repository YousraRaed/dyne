import { createReducer, on } from '@ngrx/store';
import { ItemModel } from '../../models/item';
import * as ItemActions from '../actions/item.action';

export interface ItemState {
  items: ItemModel[];
  loading: boolean;
  error: any;
}

export const initialState: ItemState = {
  items: [],
  loading: false,
  error: null,
};

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.loadItems, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ItemActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false,
  })),
  on(ItemActions.loadItemsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
