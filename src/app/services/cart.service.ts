import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { CartModel } from '../models/cart';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = 'https://api.mocki.io/v2/aqprm7yv/order/';

  constructor(private http: HttpClient, private store: Store) {}

  postCart(restId: number, order: CartModel[]): Observable<any> {
    const url = `${this.baseUrl}${restId}`;
    return this.http.post(url, order, { responseType: 'text' }).pipe(
      map((response: string) => {
        try {
          const fixedResponse = response
            .replace(/(\w+):/g, '"$1":')
            .replace(/'/g, '"');
          return JSON.parse(fixedResponse);
        } catch (error) {
          return response;
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
