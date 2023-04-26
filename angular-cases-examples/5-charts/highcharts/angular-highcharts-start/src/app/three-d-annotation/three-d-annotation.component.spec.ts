import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDAnnotationComponent } from './three-d-annotation.component';

describe('ThreeDAnnotationComponent', () => {
  let component: ThreeDAnnotationComponent;
  let fixture: ComponentFixture<ThreeDAnnotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDAnnotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
