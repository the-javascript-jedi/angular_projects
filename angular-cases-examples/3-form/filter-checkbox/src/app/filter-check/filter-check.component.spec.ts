import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCheckComponent } from './filter-check.component';

describe('FilterCheckComponent', () => {
  let component: FilterCheckComponent;
  let fixture: ComponentFixture<FilterCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
