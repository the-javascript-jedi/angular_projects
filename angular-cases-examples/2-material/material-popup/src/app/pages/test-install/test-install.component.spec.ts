import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInstallComponent } from './test-install.component';

describe('TestInstallComponent', () => {
  let component: TestInstallComponent;
  let fixture: ComponentFixture<TestInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
