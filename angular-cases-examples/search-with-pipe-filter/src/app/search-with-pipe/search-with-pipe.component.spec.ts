import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithPipeComponent } from './search-with-pipe.component';

describe('SearchWithPipeComponent', () => {
  let component: SearchWithPipeComponent;
  let fixture: ComponentFixture<SearchWithPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWithPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
