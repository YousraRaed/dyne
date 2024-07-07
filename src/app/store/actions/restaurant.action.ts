import { createAction, props } from '@ngrx/store';
import { ItemModel } from '../../models/item';
import { RestaurantModel } from '../../models/restaurant';

export const loadRestaurants = createAction('[Restaurant] Load Restaurants');
export const loadRestaurantsSuccess = createAction(
  '[Restaurant] Load Restaurants Success',
  props<{ restaurants: RestaurantModel[] }>()
);
export const loadRestaurantsFailure = createAction(
  '[Restaurant] Load Restaurants Failure',
  props<{ error: any }>()
);
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
