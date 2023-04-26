import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDTooltipComponent } from './three-d-tooltip.component';

describe('ThreeDTooltipComponent', () => {
  let component: ThreeDTooltipComponent;
  let fixture: ComponentFixture<ThreeDTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
