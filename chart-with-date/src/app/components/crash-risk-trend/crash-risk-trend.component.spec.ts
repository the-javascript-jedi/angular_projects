import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashRiskTrendComponent } from './crash-risk-trend.component';

describe('CrashRiskTrendComponent', () => {
  let component: CrashRiskTrendComponent;
  let fixture: ComponentFixture<CrashRiskTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrashRiskTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashRiskTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
