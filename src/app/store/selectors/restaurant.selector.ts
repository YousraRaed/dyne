import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RestaurantState } from '../reducers/restraurant.reducer';

export const selectRestaurantState =
  createFeatureSelector<RestaurantState>('restaurant');

export const selectAllRestaurants = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => state.restaurants
);

export const selectMenusByRestaurantId = (restaurantId: string) =>
  createSelector(
    selectAllRestaurants,
    (restaurants: any[]) =>
      restaurants.find(
        (restaurant: { id: number }) => restaurant.id === +restaurantId
      )?.menus || []
  );

export const selectLoading = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => state.loading
);

export const selectError = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => state.error
);
export const selectNameByRestaurantId = (restaurantId: string) =>
  createSelector(
    selectAllRestaurants,
    (restaurants: any[]) =>
      restaurants.find(
        (restaurant: { id: number }) => restaurant.id === +restaurantId
      )?.name || []
  );
