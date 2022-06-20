import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableFilterDatesComponent } from './disable-filter-dates.component';

describe('DisableFilterDatesComponent', () => {
  let component: DisableFilterDatesComponent;
  let fixture: ComponentFixture<DisableFilterDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableFilterDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableFilterDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
