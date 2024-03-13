import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisOneComponent } from './vis-one.component';

describe('VisOneComponent', () => {
  let component: VisOneComponent;
  let fixture: ComponentFixture<VisOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisOneComponent]
    });
    fixture = TestBed.createComponent(VisOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
