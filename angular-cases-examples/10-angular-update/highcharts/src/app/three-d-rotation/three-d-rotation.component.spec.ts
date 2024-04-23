import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDRotationComponent } from './three-d-rotation.component';

describe('ThreeDRotationComponent', () => {
  let component: ThreeDRotationComponent;
  let fixture: ComponentFixture<ThreeDRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
