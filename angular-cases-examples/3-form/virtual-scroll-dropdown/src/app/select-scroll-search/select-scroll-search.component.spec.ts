import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScrollSearchComponent } from './select-scroll-search.component';

describe('SelectScrollSearchComponent', () => {
  let component: SelectScrollSearchComponent;
  let fixture: ComponentFixture<SelectScrollSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectScrollSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScrollSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
