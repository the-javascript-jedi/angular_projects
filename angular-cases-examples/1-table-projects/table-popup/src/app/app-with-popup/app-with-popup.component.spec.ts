import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWithPopupComponent } from './app-with-popup.component';

describe('AppWithPopupComponent', () => {
  let component: AppWithPopupComponent;
  let fixture: ComponentFixture<AppWithPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppWithPopupComponent]
    });
    fixture = TestBed.createComponent(AppWithPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
