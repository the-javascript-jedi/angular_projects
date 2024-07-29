import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatingRowsComponent } from './alternating-rows.component';

describe('AlternatingRowsComponent', () => {
  let component: AlternatingRowsComponent;
  let fixture: ComponentFixture<AlternatingRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternatingRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternatingRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
