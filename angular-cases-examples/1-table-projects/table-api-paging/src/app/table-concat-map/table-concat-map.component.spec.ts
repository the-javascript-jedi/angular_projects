import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConcatMapComponent } from './table-concat-map.component';

describe('TableConcatMapComponent', () => {
  let component: TableConcatMapComponent;
  let fixture: ComponentFixture<TableConcatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConcatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
