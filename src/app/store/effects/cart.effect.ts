import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { CartModel } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import {
  postCart,
  postCartSuccess,
  postCartFailure,
} from '../actions/cart.action';
import { selectOrder } from '../selectors/cart.selector';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  postCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postCart),
      withLatestFrom(this.store.select(selectOrder)),
      mergeMap(([action, order]) => {
        if (order.length > 0) {
          return this.cartService.postCart(1, order as CartModel[]).pipe(
            map((response) => {
              this.router.navigate(['/']).then(() => {
                this.snackBar.open('Order placed successfully!', 'Close', {
                  duration: 3000,
                });
              });
              return postCartSuccess();
            }),
            catchError((error: any) => {
              console.error('Post cart error:', error);
              return of(postCartFailure({ error }));
            })
          );
        } else {
          return EMPTY;
        }
      })
    )
  );
}
