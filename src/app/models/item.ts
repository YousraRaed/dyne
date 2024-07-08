export class ItemModel {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  description: string;
  availability: boolean;
  constructor(
    id: number,
    name: string,
    thumbnail: string,
    price: number,
    description: string,
    availability: boolean
  ) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.price = price;
    this.description = description;
    this.availability = availability;
  }
}
