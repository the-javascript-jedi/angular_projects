import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestActivationComponent } from './test-activation.component';

describe('TestActivationComponent', () => {
  let component: TestActivationComponent;
  let fixture: ComponentFixture<TestActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
