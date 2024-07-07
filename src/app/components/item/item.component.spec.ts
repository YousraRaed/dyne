import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemModel } from '../../models/item';
import { By } from '@angular/platform-browser';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let item: ItemModel = {
    id: 1,
    name: 'Test Item',
    description: 'Test Description',
    price: 100,
    thumbnail: 'test.jpg',
    availability: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        ItemComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item details', () => {
    const itemNameElement = fixture.debugElement.query(
      By.css('h2')
    ).nativeElement;
    const itemDescriptionElement = fixture.debugElement.query(
      By.css('.description')
    ).nativeElement;
    const itemPriceElement = fixture.debugElement.query(
      By.css('.price')
    ).nativeElement;

    expect(itemNameElement.textContent).toContain(item.name);
    expect(itemDescriptionElement.textContent).toContain(item.description);
  });

  it('should call handleAdd when add button is clicked', () => {
    spyOn(component, 'handleAdd').and.callThrough();
    const addButton = fixture.debugElement.query(
      By.css('.add-icon')
    ).nativeElement;
    addButton.click();
    fixture.detectChanges();
    expect(component.handleAdd).toHaveBeenCalled();
  });
});
