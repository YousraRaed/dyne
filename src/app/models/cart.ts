export class CartModel {
  itemId: number;
  quantity: number;
  constructor(itemId: number, qantity: number) {
    this.itemId = itemId;
    this.quantity = qantity;
  }
}
