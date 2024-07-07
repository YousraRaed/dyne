import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ItemService } from './item.service';
import { ItemModel } from '../models/item';

describe('ItemService', () => {
  let service: ItemService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService],
    });
    service = TestBed.inject(ItemService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch items successfully', () => {
    const mockItems: ItemModel[] = [
      {
        id: 1,
        name: 'Item 1',
        price: 100,
        description: 'Description 1',
        thumbnail: 'thumbnail1.jpg',
        availability: true,
      },
      {
        id: 2,
        name: 'Item 2',
        price: 200,
        description: 'Description 2',
        thumbnail: 'thumbnail2.jpg',
        availability: true,
      },
    ];
    const menuId = '123';

    service.getItems(menuId).subscribe((items) => {
      expect(items.length).toBe(2);
      expect(items).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/${menuId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should handle error correctly', () => {
    const menuId = '123';
    const errorMessage = 'Internal Server Error';

    service.getItems(menuId).subscribe(
      () => fail('expected an error, not items'),
      (error) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      }
    );

    const req = httpMock.expectOne(`${service['baseUrl']}/${menuId}`);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });
});
