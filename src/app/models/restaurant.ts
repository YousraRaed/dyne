import { MenuModel } from './menu';

export class RestaurantModel {
  id?: number;
  menus?: MenuModel[];
  name?: string;
  restaurantBackground?: string;
  background?: string;
  tags?: string[];
}
