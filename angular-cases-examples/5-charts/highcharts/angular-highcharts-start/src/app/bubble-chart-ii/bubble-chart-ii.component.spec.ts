import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleChartIiComponent } from './bubble-chart-ii.component';

describe('BubbleChartIiComponent', () => {
  let component: BubbleChartIiComponent;
  let fixture: ComponentFixture<BubbleChartIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleChartIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleChartIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
