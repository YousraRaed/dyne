import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import {
  selectError,
  selectLoading,
  selectMenusByRestaurantId,
  selectNameByRestaurantId,
} from '../../store/selectors/restaurant.selector';
import { restaurantReducer } from '../../store/reducers/restraurant.reducer';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let store: Store;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
        StoreModule.forRoot({
          restaurant: restaurantReducer,
        }),
        MenuComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  if (key === 'id') return '1';
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

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);

    spyOn(store, 'select').and.callFake((selector: any) => {
      if (selector === selectMenusByRestaurantId('1')) {
        return of([]);
      }
      if (selector === selectNameByRestaurantId('1')) {
        return of('Test Restaurant');
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

  it('should navigate back when goBack is called', () => {
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });

  it('should navigate to items page when goToItem is called', () => {
    const mockItem = { id: 1, name: 'Test Item' } as any;
    component.goToItem(mockItem);
    expect(router.navigate).toHaveBeenCalledWith(['/menu/1/items/Test Item']);
  });
});
