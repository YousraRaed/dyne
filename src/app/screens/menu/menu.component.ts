import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { MenuModel } from '../../models/menu';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import {
  selectError,
  selectLoading,
  selectMenusByRestaurantId,
  selectNameByRestaurantId,
} from '../../store/selectors/restaurant.selector';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { Router } from '@angular/router';
import { ItemModel } from '../../models/item';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MenuItemComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menus$?: Observable<Partial<MenuModel>[]>;
  loading$?: Observable<boolean>;
  error$?: Observable<any>;
  restaurantName$?: Observable<string>;
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit(): void {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    this.restaurantName$ = this.store.select(
      selectNameByRestaurantId(restaurantId || '')
    );
    if (restaurantId) {
      this.menus$ = this.store.select(
        selectMenusByRestaurantId(restaurantId || '')
      );
      this.loading$ = this.store.select(selectLoading);
      this.error$ = this.store.select(selectError);
    }
  }

  goBack(): void {
    this.location.back();
  }
  goToItem(item: Partial<ItemModel>): void {
    if (item.id && item.name) {
      this.router.navigate([`/menu/${item.id}/items/${item.name}`]);
    }
  }
}
