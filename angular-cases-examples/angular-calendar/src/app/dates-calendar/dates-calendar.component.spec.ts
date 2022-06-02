import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesCalendarComponent } from './dates-calendar.component';

describe('DatesCalendarComponent', () => {
  let component: DatesCalendarComponent;
  let fixture: ComponentFixture<DatesCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
