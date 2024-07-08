import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MenuModel } from '../../models/menu';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  @Input() menu?: Partial<MenuModel>;
}
