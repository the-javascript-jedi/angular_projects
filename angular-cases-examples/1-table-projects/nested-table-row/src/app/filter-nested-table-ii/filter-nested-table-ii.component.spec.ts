import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNestedTableIiComponent } from './filter-nested-table-ii.component';

describe('FilterNestedTableIiComponent', () => {
  let component: FilterNestedTableIiComponent;
  let fixture: ComponentFixture<FilterNestedTableIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNestedTableIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNestedTableIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
