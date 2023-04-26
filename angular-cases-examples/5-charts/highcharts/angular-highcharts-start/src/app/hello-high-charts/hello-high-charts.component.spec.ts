import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloHighChartsComponent } from './hello-high-charts.component';

describe('HelloHighChartsComponent', () => {
  let component: HelloHighChartsComponent;
  let fixture: ComponentFixture<HelloHighChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloHighChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloHighChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
