import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPipeNestedObjectsComponent } from './search-pipe-nested-objects.component';

describe('SearchPipeNestedObjectsComponent', () => {
  let component: SearchPipeNestedObjectsComponent;
  let fixture: ComponentFixture<SearchPipeNestedObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPipeNestedObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPipeNestedObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
