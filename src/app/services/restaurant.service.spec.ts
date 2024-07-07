import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RestaurantService } from './restaurant.service';
import { RestaurantModel } from '../models/restaurant';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestaurantService],
    });
    service = TestBed.inject(RestaurantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch restaurants successfully', () => {
    const mockRestaurants: RestaurantModel[] = [
      {
        id: 1,
        name: 'Restaurant 1',
        menus: [],
        restaurantBackground: 'bg1.jpg',
        background: 'bg1.jpg',
        tags: ['tag1'],
      },
      {
        id: 2,
        name: 'Restaurant 2',
        menus: [],
        restaurantBackground: 'bg2.jpg',
        background: 'bg2.jpg',
        tags: ['tag2'],
      },
    ];

    service.getRestaurants().subscribe((restaurants) => {
      expect(restaurants.length).toBe(2);
      expect(restaurants).toEqual(mockRestaurants);
    });

    const req = httpMock.expectOne(service['baseUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockRestaurants);
  });

  it('should handle error correctly', () => {
    const errorMessage = 'Internal Server Error';

    service.getRestaurants().subscribe(
      () => fail('expected an error, not restaurants'),
      (error) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      }
    );

    const req = httpMock.expectOne(service['baseUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });
});
