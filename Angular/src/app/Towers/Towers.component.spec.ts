/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TowersComponent } from './Towers.component';

describe('TowerComponent', () => {
  let component: TowersComponent;
  let fixture: ComponentFixture<TowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
