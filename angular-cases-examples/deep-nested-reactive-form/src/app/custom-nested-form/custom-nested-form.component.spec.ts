import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNestedFormComponent } from './custom-nested-form.component';

describe('CustomNestedFormComponent', () => {
  let component: CustomNestedFormComponent;
  let fixture: ComponentFixture<CustomNestedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNestedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNestedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
