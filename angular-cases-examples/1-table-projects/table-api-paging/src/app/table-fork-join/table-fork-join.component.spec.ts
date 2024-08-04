import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForkJoinComponent } from './table-fork-join.component';

describe('TableForkJoinComponent', () => {
  let component: TableForkJoinComponent;
  let fixture: ComponentFixture<TableForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableForkJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
