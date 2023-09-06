import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPopupComponent } from './column-popup.component';

describe('ColumnPopupComponent', () => {
  let component: ColumnPopupComponent;
  let fixture: ComponentFixture<ColumnPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
