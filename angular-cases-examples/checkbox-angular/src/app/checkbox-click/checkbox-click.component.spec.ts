import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxClickComponent } from './checkbox-click.component';

describe('CheckboxClickComponent', () => {
  let component: CheckboxClickComponent;
  let fixture: ComponentFixture<CheckboxClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
