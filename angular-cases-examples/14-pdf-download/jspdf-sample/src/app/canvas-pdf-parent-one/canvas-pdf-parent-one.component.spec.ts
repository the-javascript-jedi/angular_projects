import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPdfParentOneComponent } from './canvas-pdf-parent-one.component';

describe('CanvasPdfParentOneComponent', () => {
  let component: CanvasPdfParentOneComponent;
  let fixture: ComponentFixture<CanvasPdfParentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasPdfParentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasPdfParentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
