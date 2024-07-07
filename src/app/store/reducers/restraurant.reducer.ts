import { createReducer, on } from '@ngrx/store';
import * as RestaurantActions from '../actions/restaurant.action';
import { RestaurantModel } from '../../models/restaurant';

export interface RestaurantState {
  restaurants: RestaurantModel[];
  loading: boolean;
  error: any;
}

export const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: null,
};

export const restaurantReducer = createReducer(
  initialState,
  on(RestaurantActions.loadRestaurants, (state) => ({
    ...state,
    loading: true,
  })),
  on(RestaurantActions.loadRestaurantsSuccess, (state, { restaurants }) => ({
    ...state,
    loading: false,
    restaurants,
  })),
  on(RestaurantActions.loadRestaurantsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
