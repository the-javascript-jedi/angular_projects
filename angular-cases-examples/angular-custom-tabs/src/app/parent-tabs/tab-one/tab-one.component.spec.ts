import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOneComponent } from './tab-one.component';

describe('TabOneComponent', () => {
  let component: TabOneComponent;
  let fixture: ComponentFixture<TabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
