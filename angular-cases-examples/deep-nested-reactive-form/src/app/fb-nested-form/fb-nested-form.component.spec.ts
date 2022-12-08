import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbNestedFormComponent } from './fb-nested-form.component';

describe('FbNestedFormComponent', () => {
  let component: FbNestedFormComponent;
  let fixture: ComponentFixture<FbNestedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbNestedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbNestedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
