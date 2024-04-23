import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartSliceComponent } from './pie-chart-slice.component';

describe('PieChartSliceComponent', () => {
  let component: PieChartSliceComponent;
  let fixture: ComponentFixture<PieChartSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartSliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
