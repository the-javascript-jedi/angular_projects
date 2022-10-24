import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDScatterMultipleComponent } from './three-d-scatter-multiple.component';

describe('ThreeDScatterMultipleComponent', () => {
  let component: ThreeDScatterMultipleComponent;
  let fixture: ComponentFixture<ThreeDScatterMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDScatterMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDScatterMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
