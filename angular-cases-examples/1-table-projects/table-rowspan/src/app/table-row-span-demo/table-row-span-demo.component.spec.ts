import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowSpanDemoComponent } from './table-row-span-demo.component';

describe('TableRowSpanDemoComponent', () => {
  let component: TableRowSpanDemoComponent;
  let fixture: ComponentFixture<TableRowSpanDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowSpanDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowSpanDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
