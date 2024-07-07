import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantModel } from '../models/restaurant';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private baseUrl = 'https://api.mocki.io/v2/aqprm7yv/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<RestaurantModel[]> {
    return this.http.get<RestaurantModel[]>(this.baseUrl);
  }
}
