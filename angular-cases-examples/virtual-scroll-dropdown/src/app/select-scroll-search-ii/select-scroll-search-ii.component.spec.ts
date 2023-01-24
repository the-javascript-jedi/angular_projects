import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScrollSearchIiComponent } from './select-scroll-search-ii.component';

describe('SelectScrollSearchIiComponent', () => {
  let component: SelectScrollSearchIiComponent;
  let fixture: ComponentFixture<SelectScrollSearchIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectScrollSearchIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScrollSearchIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
