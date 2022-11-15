import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDdlFilterComponent } from './mat-ddl-filter.component';

describe('MatDdlFilterComponent', () => {
  let component: MatDdlFilterComponent;
  let fixture: ComponentFixture<MatDdlFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDdlFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDdlFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
