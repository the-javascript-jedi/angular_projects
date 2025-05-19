import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAccountSummaryComponent } from './test-account-summary.component';

describe('TestAccountSummaryComponent', () => {
  let component: TestAccountSummaryComponent;
  let fixture: ComponentFixture<TestAccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAccountSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
