import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemComponent } from './cart-item.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemModel } from '../../models/item';
import { By } from '@angular/platform-browser';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let item: Partial<{ item: ItemModel; quantity: number }> = {
    item: { id: 1, name: 'Test Item', price: 100, thumbnail: 'test.jpg' },
    quantity: 2,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        CartItemComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should call handleRemove when remove button is clicked', () => {
    spyOn(component, 'handleRemove').and.callThrough();
    const removeButton = fixture.debugElement.query(
      By.css('.remove-icon')
    ).nativeElement;
    removeButton.click();
    fixture.detectChanges();
    expect(component.handleRemove).toHaveBeenCalled();
  });
});
