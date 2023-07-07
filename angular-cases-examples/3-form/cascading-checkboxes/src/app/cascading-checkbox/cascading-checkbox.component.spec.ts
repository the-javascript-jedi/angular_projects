import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingCheckboxComponent } from './cascading-checkbox.component';

describe('CascadingCheckboxComponent', () => {
  let component: CascadingCheckboxComponent;
  let fixture: ComponentFixture<CascadingCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CascadingCheckboxComponent]
    });
    fixture = TestBed.createComponent(CascadingCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
