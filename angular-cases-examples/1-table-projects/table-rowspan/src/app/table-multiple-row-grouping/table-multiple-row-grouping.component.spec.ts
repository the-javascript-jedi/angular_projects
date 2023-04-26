import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMultipleRowGroupingComponent } from './table-multiple-row-grouping.component';

describe('TableMultipleRowGroupingComponent', () => {
  let component: TableMultipleRowGroupingComponent;
  let fixture: ComponentFixture<TableMultipleRowGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMultipleRowGroupingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMultipleRowGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
