import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnChkboxComponent } from './column-chkbox.component';

describe('ColumnChkboxComponent', () => {
  let component: ColumnChkboxComponent;
  let fixture: ComponentFixture<ColumnChkboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnChkboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnChkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
