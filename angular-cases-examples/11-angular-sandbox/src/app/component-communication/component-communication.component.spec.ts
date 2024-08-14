import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunicationComponent } from './component-communication.component';

describe('ComponentCommunicationComponent', () => {
  let component: ComponentCommunicationComponent;
  let fixture: ComponentFixture<ComponentCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCommunicationComponent]
    });
    fixture = TestBed.createComponent(ComponentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
