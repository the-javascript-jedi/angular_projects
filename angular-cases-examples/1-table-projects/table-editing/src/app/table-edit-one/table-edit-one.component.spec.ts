import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEditOneComponent } from './table-edit-one.component';

describe('TableEditOneComponent', () => {
  let component: TableEditOneComponent;
  let fixture: ComponentFixture<TableEditOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEditOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEditOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
