import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestComponent } from './rest.component';

describe('RestComponent', () => {
  let component: RestComponent;
  let fixture: ComponentFixture<RestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
