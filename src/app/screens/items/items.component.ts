import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from '../../models/item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import {
  selectAllItems,
  selectError,
  selectLoading,
} from '../../store/selectors/item.selector';
import { loadItems } from '../../store/actions/item.action';
import { ItemComponent } from '../../components/item/item.component';
import { ItemService } from '../../services/item.service';
import { addItemToCart } from '../../store/actions/cart.action';
import { selectTotalCartItems } from '../../store/selectors/cart.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-screen',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    ItemComponent,
  ],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items$?: Observable<ItemModel[]>;
  loading$?: Observable<boolean>;
  error$?: Observable<any>;
  cartItems$?: Observable<number>;
  name: string = '';

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const menuId = this.route.snapshot.paramMap.get('menuId');
    this.name = this.route.snapshot.paramMap.get('name') || '';
    if (menuId) {
      this.store.dispatch(loadItems({ menuId }));
      this.items$ = this.store.select(selectAllItems);
      this.cartItems$ = this.store.select(selectTotalCartItems);
      this.loading$ = this.store.select(selectLoading);
      this.error$ = this.store.select(selectError);
    }
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(item: ItemModel): void {
    if (item.id) {
      this.store.dispatch(
        addItemToCart({ cartItem: { item: item, quantity: 1 } })
      );
    }
  }
  checkout() {
    this.router.navigate(['cart']);
  }
}
