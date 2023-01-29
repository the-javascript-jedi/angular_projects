import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithMenuComponent } from './search-with-menu.component';

describe('SearchWithMenuComponent', () => {
  let component: SearchWithMenuComponent;
  let fixture: ComponentFixture<SearchWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWithMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
