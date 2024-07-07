import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../store/reducers/cart.reducer';

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(cartReducer)],
      providers: [CartService],
    });
    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle postCart correctly', () => {
    const mockOrder = [{ itemId: 1, quantity: 2 }];
    const mockResponse = "{\n  status:'your order is being processed'\n}";
    const fixedResponse = { status: 'your order is being processed' };

    service.postCart(1, mockOrder).subscribe((response) => {
      expect(response).toEqual(fixedResponse);
    });

    const req = httpMock.expectOne('https://api.mocki.io/v2/aqprm7yv/order/1');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse, { headers: { 'Content-Type': 'text/plain' } });
  });
});
