import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemModel } from '../../models/item';
@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() item?: { item?: ItemModel; quantity?: number };
  @Output() addItem = new EventEmitter<ItemModel>();
  @Output() removeItem = new EventEmitter<ItemModel>();
  handleAdd() {
    if (this.item) {
      this.addItem.emit(this.item.item);
    }
  }

  handleRemove() {
    if (this.item?.item) {
      this.removeItem.emit(this.item.item);
    }
  }
}
