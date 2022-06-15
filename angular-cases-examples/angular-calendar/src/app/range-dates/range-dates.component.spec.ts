import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeDatesComponent } from './range-dates.component';

describe('RangeDatesComponent', () => {
  let component: RangeDatesComponent;
  let fixture: ComponentFixture<RangeDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
