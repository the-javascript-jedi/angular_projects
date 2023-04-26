import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowSpanComponent } from './table-row-span.component';

describe('TableRowSpanComponent', () => {
  let component: TableRowSpanComponent;
  let fixture: ComponentFixture<TableRowSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowSpanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
