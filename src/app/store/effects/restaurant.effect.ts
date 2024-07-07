import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RestaurantService } from '../../services/restaurant.service';
import * as RestaurantActions from '../actions/restaurant.action';

@Injectable()
export class RestaurantEffects {
  loadRestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantActions.loadRestaurants),
      mergeMap(() =>
        this.restaurantService.getRestaurants().pipe(
          map((restaurants: any) =>
            RestaurantActions.loadRestaurantsSuccess({ restaurants })
          ),
          catchError((error: any) =>
            of(RestaurantActions.loadRestaurantsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private restaurantService: RestaurantService
  ) {}
}
