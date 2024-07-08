import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  hydrate,
  hydrateSuccess,
  hydrateFailure,
} from '../actions/hydration.action';

@Injectable()
export class HydrationEffects {
  constructor(private actions$: Actions, private store: Store) {}

  hydrate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(hydrate),
      switchMap(() => {
        try {
          const savedState = localStorage.getItem('cartState');
          if (savedState) {
            const state = JSON.parse(savedState);
            return of(hydrateSuccess({ state }));
          } else {
            return of(hydrateFailure({ error: 'No state to hydrate' }));
          }
        } catch (error) {
          return of(hydrateFailure({ error }));
        }
      }),
      catchError((error) => of(hydrateFailure({ error })))
    )
  );
}
