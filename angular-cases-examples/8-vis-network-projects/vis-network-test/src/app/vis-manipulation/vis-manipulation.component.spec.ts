import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisManipulationComponent } from './vis-manipulation.component';

describe('VisManipulationComponent', () => {
  let component: VisManipulationComponent;
  let fixture: ComponentFixture<VisManipulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisManipulationComponent]
    });
    fixture = TestBed.createComponent(VisManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
