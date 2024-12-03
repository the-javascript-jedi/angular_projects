import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfOneComponent } from './pdf-one.component';

describe('PdfOneComponent', () => {
  let component: PdfOneComponent;
  let fixture: ComponentFixture<PdfOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
