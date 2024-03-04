import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChartComponent } from './multiple-chart.component';

describe('MultipleChartComponent', () => {
  let component: MultipleChartComponent;
  let fixture: ComponentFixture<MultipleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
