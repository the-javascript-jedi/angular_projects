import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConnectionComponent } from './test-connection.component';

describe('TestConnectionComponent', () => {
  let component: TestConnectionComponent;
  let fixture: ComponentFixture<TestConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
