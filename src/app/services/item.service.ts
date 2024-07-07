import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private baseUrl = 'https://api.mocki.io/v2/aqprm7yv/menus';

  constructor(private http: HttpClient) {}

  getItems(menuId: string): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(`${this.baseUrl}/${menuId}`);
  }
}
