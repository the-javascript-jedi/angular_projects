import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOneComponent } from './select-one.component';

describe('SelectOneComponent', () => {
  let component: SelectOneComponent;
  let fixture: ComponentFixture<SelectOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
