import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormValidationComponent } from './select-form-validation.component';

describe('SelectFormValidationComponent', () => {
  let component: SelectFormValidationComponent;
  let fixture: ComponentFixture<SelectFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFormValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
