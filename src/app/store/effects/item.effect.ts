import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ItemService } from '../../services/item.service';
import * as ItemActions from '../actions/item.action';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions, private itemService: ItemService) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      mergeMap((action) =>
        this.itemService.getItems(action.menuId).pipe(
          map((items) => ItemActions.loadItemsSuccess({ items })),
          catchError((error) => of(ItemActions.loadItemsFailure({ error })))
        )
      )
    )
  );
}
