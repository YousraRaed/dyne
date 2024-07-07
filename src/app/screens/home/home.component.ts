import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RestaurantComponent } from '../../components/restaurant/restaurant.component';
import { RestaurantModel } from '../../models/restaurant';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectAllRestaurants,
  selectLoading,
  selectError,
} from '../../store/selectors/restaurant.selector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    RestaurantComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  restaurants$?: Observable<Partial<RestaurantModel>[]>;
  loading$?: Observable<boolean>;
  error$?: Observable<any>;
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.restaurants$ = this.store.select(selectAllRestaurants);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  goToMenu(restaurant: Partial<RestaurantModel>): void {
    if (restaurant.id) {
      this.router.navigate(['/menu', restaurant.id]);
    }
  }
}
