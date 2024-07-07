import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsComponent } from './items.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { loadItems } from '../../store/actions/item.action';
import { addItemToCart } from '../../store/actions/cart.action';
import {
  selectAllItems,
  selectError,
  selectLoading,
} from '../../store/selectors/item.selector';
import { selectTotalCartItems } from '../../store/selectors/cart.selector';
import { itemReducer } from '../../store/reducers/item.reducer';
import { cartReducer } from '../../store/reducers/cart.reducer';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let store: Store;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        StoreModule.forRoot({
          items: itemReducer,
          cart: cartReducer,
        }),
        ItemsComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  if (key === 'menuId') return '1';
                  if (key === 'name') return 'Test Menu';
                  return null;
                },
              },
            },
          },
        },
        {
          provide: Location,
          useValue: {
            back: jasmine.createSpy('back'),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);

    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.callFake((selector: any) => {
      if (selector === selectAllItems) {
        return of([]);
      }
      if (selector === selectTotalCartItems) {
        return of(0);
      }
      if (selector === selectLoading) {
        return of(false);
      }
      if (selector === selectError) {
        return of(null);
      }
      return of([]);
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadItems on init', () => {
    expect(store.dispatch).toHaveBeenCalledWith(loadItems({ menuId: '1' }));
  });

  it('should navigate back when goBack is called', () => {
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });

  it('should dispatch addItemToCart when addToCart is called', () => {
    const mockItem = { id: 1, name: 'Test Item' } as any;
    component.addToCart(mockItem);
    expect(store.dispatch).toHaveBeenCalledWith(
      addItemToCart({ cartItem: { item: mockItem, quantity: 1 } })
    );
  });

  it('should navigate to cart when checkout is called', () => {
    component.checkout();
    expect(router.navigate).toHaveBeenCalledWith(['cart']);
  });
});
