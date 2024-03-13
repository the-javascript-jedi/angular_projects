import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisSaveLoadComponent } from './vis-save-load.component';

describe('VisSaveLoadComponent', () => {
  let component: VisSaveLoadComponent;
  let fixture: ComponentFixture<VisSaveLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisSaveLoadComponent]
    });
    fixture = TestBed.createComponent(VisSaveLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
