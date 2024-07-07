import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { restaurantReducer } from '../../store/reducers/restraurant.reducer';
import { of } from 'rxjs';
import { RestaurantModel } from '../../models/restaurant';
import {
  selectAllRestaurants,
  selectLoading,
  selectError,
} from '../../store/selectors/restaurant.selector';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: Store;
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
        RouterTestingModule.withRoutes([]),
        HomeComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select restaurants from the store', () => {
    const mockRestaurants: Partial<RestaurantModel>[] = [
      { id: 1, name: 'Restaurant 1' },
      { id: 2, name: 'Restaurant 2' },
    ];

    spyOn(store, 'select').and.callFake((selector: any) => {
      if (selector === selectAllRestaurants) {
        return of(mockRestaurants);
      }
      if (selector === selectLoading) {
        return of(false);
      }
      if (selector === selectError) {
        return of(null);
      }
      return of([]);
    });

    component.ngOnInit();

    component.restaurants$?.subscribe((restaurants) => {
      expect(restaurants).toEqual(mockRestaurants);
    });

    component.loading$?.subscribe((loading) => {
      expect(loading).toBeFalse();
    });

    component.error$?.subscribe((error) => {
      expect(error).toBeNull();
    });
  });

  it('should navigate to menu page on restaurant click', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const mockRestaurant: Partial<RestaurantModel> = {
      id: 1,
      name: 'Restaurant 1',
    };

    component.goToMenu(mockRestaurant);

    expect(navigateSpy).toHaveBeenCalledWith(['/menu', mockRestaurant.id]);
  });
});
