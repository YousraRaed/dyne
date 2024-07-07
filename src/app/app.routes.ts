import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'menu/:id',
    loadComponent: () =>
      import('./screens/menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'menu/:menuId/items/:name',
    loadComponent: () =>
      import('./screens/items/items.component').then((m) => m.ItemsComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./screens/cart/cart.component').then((m) => m.CartComponent),
  },

  { path: '**', redirectTo: '' },
];
