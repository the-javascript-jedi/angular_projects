import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfTwoComponent } from './pdf-two.component';

describe('PdfTwoComponent', () => {
  let component: PdfTwoComponent;
  let fixture: ComponentFixture<PdfTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
