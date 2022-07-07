import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomComponent } from './search-custom.component';

describe('SearchCustomComponent', () => {
  let component: SearchCustomComponent;
  let fixture: ComponentFixture<SearchCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
