import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponentComponent } from './parent-component.component';

describe('ParentComponentComponent', () => {
  let component: ParentComponentComponent;
  let fixture: ComponentFixture<ParentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentComponentComponent]
    });
    fixture = TestBed.createComponent(ParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
