import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemComponent } from './menu-item.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MenuModel } from '../../models/menu';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  let menu: MenuModel = {
    id: 1,
    name: 'Lunch Menu',
    background: 'https://i.ibb.co/09v0GSK/menu.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatCardModule, MenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.menu = menu;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
