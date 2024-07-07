import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Store, StoreModule } from '@ngrx/store';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { ItemModel } from '../../models/item';
import { cartReducer } from '../../store/reducers/cart.reducer';
import { itemReducer } from '../../store/reducers/item.reducer';
import {
  addItemToCart,
  postCart,
  removeItemfromCart,
} from '../../store/actions/cart.action';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatSnackBarModule,
        StoreModule.forRoot({
          cart: cartReducer,
          items: itemReducer,
        }),
        CartItemComponent,
      ],
      providers: [Location],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select cart items from the store', () => {
    const mockItems: Partial<{ item: ItemModel; quantity: number }>[] = [
      { item: { id: 1, name: 'Item 1' }, quantity: 2 },
      { item: { id: 2, name: 'Item 2' }, quantity: 3 },
    ];

    spyOn(store, 'select').and.returnValue(of(mockItems));
    component.ngOnInit();
    component.cartItems$?.subscribe((items) => {
      expect(items).toEqual(mockItems);
    });
  });

  it('should add item to cart', () => {
    const mockItem: ItemModel = { id: 1, name: 'Item 1' };

    spyOn(store, 'dispatch');
    component.addToCart(mockItem);
    expect(store.dispatch).toHaveBeenCalledWith(
      addItemToCart({ cartItem: { item: mockItem, quantity: 1 } })
    );
  });

  it('should remove item from cart', () => {
    const mockItem: ItemModel = { id: 1, name: 'Item 1' };

    spyOn(store, 'dispatch');
    component.removeFromCart(mockItem);
    expect(store.dispatch).toHaveBeenCalledWith(
      removeItemfromCart({ cartItem: { item: mockItem } })
    );
  });

  it('should go back', () => {
    spyOn(location, 'back');
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });

  it('should dispatch postCart action on checkout', () => {
    spyOn(store, 'dispatch');
    component.checkout();
    expect(store.dispatch).toHaveBeenCalledWith(postCart());
  });
});
