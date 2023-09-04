import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartApiDataComponent } from './line-chart-api-data.component';

describe('LineChartApiDataComponent', () => {
  let component: LineChartApiDataComponent;
  let fixture: ComponentFixture<LineChartApiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartApiDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
