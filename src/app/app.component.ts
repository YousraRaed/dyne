import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRestaurants } from './store/actions/restaurant.action';
import { Store } from '@ngrx/store';
import { hydrate } from './store/actions/hydration.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dyne';
  constructor(private store: Store) {
    this.store.dispatch(loadRestaurants());
    this.store.dispatch(hydrate());
  }
}
