import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSelectionRmComponent } from './checkbox-selection-rm.component';

describe('CheckboxSelectionRmComponent', () => {
  let component: CheckboxSelectionRmComponent;
  let fixture: ComponentFixture<CheckboxSelectionRmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxSelectionRmComponent]
    });
    fixture = TestBed.createComponent(CheckboxSelectionRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
