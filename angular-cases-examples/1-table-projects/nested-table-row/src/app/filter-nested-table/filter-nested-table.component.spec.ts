import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNestedTableComponent } from './filter-nested-table.component';

describe('FilterNestedTableComponent', () => {
  let component: FilterNestedTableComponent;
  let fixture: ComponentFixture<FilterNestedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNestedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNestedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
