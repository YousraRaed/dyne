import { MenuModel } from './menu';

export class RestaurantModel {
  id: number;
  menus: MenuModel[];
  name: string;
  restaurantBackground: string;
  background: string;
  tags: string[];
  constructor(
    id: number,
    menus: MenuModel[],
    name: string,
    restaurantBackground: string,
    background: string,
    tags: string[]
  ) {
    this.id = id;
    this.background = background;
    this.name = name;
    this.menus = menus;
    this.restaurantBackground = restaurantBackground;
    this.tags = tags;
  }
}
