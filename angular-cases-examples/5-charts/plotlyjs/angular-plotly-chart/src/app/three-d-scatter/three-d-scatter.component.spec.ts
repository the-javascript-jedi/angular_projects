import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDScatterComponent } from './three-d-scatter.component';

describe('ThreeDScatterComponent', () => {
  let component: ThreeDScatterComponent;
  let fixture: ComponentFixture<ThreeDScatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDScatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
