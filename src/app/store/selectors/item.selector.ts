import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState } from '../reducers/item.reducer';

export const selectItemState = createFeatureSelector<ItemState>('items');

export const selectAllItems = createSelector(
  selectItemState,
  (state: ItemState) => state.items
);

export const selectLoading = createSelector(
  selectItemState,
  (state: ItemState) => state.loading
);

export const selectError = createSelector(
  selectItemState,
  (state: ItemState) => state.error
);
