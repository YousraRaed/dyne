import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ItemModel } from '../../models/item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import {
  selectError,
  selectLoading,
} from '../../store/selectors/item.selector';
import {
  selectAmount,
  selectCartItems,
} from '../../store/selectors/cart.selector';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import {
  addItemToCart,
  postCart,
  removeItemfromCart,
} from '../../store/actions/cart.action';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    CartItemComponent,
    MatSnackBarModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartItems$?: Observable<Partial<{ item: ItemModel; quantity: number }>[]>;
  loading$?: Observable<boolean>;
  error$?: Observable<any>;
  amount$?: Observable<number>;

  constructor(private store: Store, private location: Location) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartItems);
    this.amount$ = this.store.select(selectAmount);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }
  addToCart(item: ItemModel): void {
    if (item.id) {
      this.store.dispatch(
        addItemToCart({ cartItem: { item: item, quantity: 1 } })
      );
    }
  }

  removeFromCart(item: ItemModel): void {
    if (item.id) {
      this.store.dispatch(removeItemfromCart({ cartItem: { item: item } }));
    }
  }
  goBack(): void {
    this.location.back();
  }
  checkout() {
    this.store.dispatch(postCart());
  }
}
