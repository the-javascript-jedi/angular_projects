import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithGraphComponent } from './table-with-graph.component';

describe('TableWithGraphComponent', () => {
  let component: TableWithGraphComponent;
  let fixture: ComponentFixture<TableWithGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
