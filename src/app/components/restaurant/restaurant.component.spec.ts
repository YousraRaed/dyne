import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantComponent } from './restaurant.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { By } from '@angular/platform-browser';
import { RestaurantModel } from '../../models/restaurant';

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;
  let restaurant: Partial<RestaurantModel> = {
    name: 'Pasta Palace',
    restaurantBackground: 'https://i.ibb.co/f9JWRFZ/restaurang.jpg',
    tags: ['Italian', 'Pasta'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatChipsModule,
        RestaurantComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    component.restaurant = restaurant;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display restaurant details', () => {
    const restaurantNameElement = fixture.debugElement.query(
      By.css('.restaurant-name')
    ).nativeElement;
    const tagsElement = fixture.debugElement.queryAll(By.css('mat-chip'));

    expect(restaurantNameElement.textContent).toContain(restaurant.name);
  });
});
