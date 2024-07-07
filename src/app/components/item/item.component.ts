import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemModel } from '../../models/item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item?: ItemModel;
  @Output() addItem = new EventEmitter<ItemModel>();

  handleAdd() {
    if (this.item) {
      this.addItem.emit(this.item);
    }
  }
}
