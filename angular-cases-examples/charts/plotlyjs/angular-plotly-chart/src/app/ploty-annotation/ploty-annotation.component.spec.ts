import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotyAnnotationComponent } from './ploty-annotation.component';

describe('PlotyAnnotationComponent', () => {
  let component: PlotyAnnotationComponent;
  let fixture: ComponentFixture<PlotyAnnotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotyAnnotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotyAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
