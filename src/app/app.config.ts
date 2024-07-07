import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { restaurantReducer } from './store/reducers/restraurant.reducer';
import { RestaurantEffects } from './store/effects/restaurant.effect';
import { ItemEffects } from './store/effects/item.effect';
import { itemReducer } from './store/reducers/item.reducer';
import { CartEffects } from './store/effects/cart.effect';
import { cartReducer } from './store/reducers/cart.reducer';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAnimations(),
    provideStore({
      restaurant: restaurantReducer,
      items: itemReducer,
      cart: cartReducer,
    }),
    provideEffects([RestaurantEffects, ItemEffects, CartEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ],
};
