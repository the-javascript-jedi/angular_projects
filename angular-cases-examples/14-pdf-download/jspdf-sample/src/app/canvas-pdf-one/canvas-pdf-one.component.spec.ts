import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPdfOneComponent } from './canvas-pdf-one.component';

describe('CanvasPdfOneComponent', () => {
  let component: CanvasPdfOneComponent;
  let fixture: ComponentFixture<CanvasPdfOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasPdfOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasPdfOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
