import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNestedTableRowComponent } from './sort-nested-table-row.component';

describe('SortNestedTableRowComponent', () => {
  let component: SortNestedTableRowComponent;
  let fixture: ComponentFixture<SortNestedTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortNestedTableRowComponent]
    });
    fixture = TestBed.createComponent(SortNestedTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
