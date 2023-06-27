import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNestedRowComponent } from './table-nested-row.component';

describe('TableNestedRowComponent', () => {
  let component: TableNestedRowComponent;
  let fixture: ComponentFixture<TableNestedRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNestedRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNestedRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
