import { createAction, props } from '@ngrx/store';
import { ItemModel } from '../../models/item';

export const loadItems = createAction(
  '[Menu] Load Items',
  props<{ menuId: string }>()
);

export const loadItemsSuccess = createAction(
  '[Menu] Load Items Success',
  props<{ items: ItemModel[] }>()
);

export const loadItemsFailure = createAction(
  '[Menu] Load Items Failure',
  props<{ error: any }>()
);
