import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBarchartComponent } from './highlight-barchart.component';

describe('HighlightBarchartComponent', () => {
  let component: HighlightBarchartComponent;
  let fixture: ComponentFixture<HighlightBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightBarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
