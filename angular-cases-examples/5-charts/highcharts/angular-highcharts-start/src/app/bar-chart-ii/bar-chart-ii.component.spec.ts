import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartIiComponent } from './bar-chart-ii.component';

describe('BarChartIiComponent', () => {
  let component: BarChartIiComponent;
  let fixture: ComponentFixture<BarChartIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
