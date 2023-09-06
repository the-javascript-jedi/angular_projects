import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnViewAllComponent } from './column-view-all.component';

describe('ColumnViewAllComponent', () => {
  let component: ColumnViewAllComponent;
  let fixture: ComponentFixture<ColumnViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
