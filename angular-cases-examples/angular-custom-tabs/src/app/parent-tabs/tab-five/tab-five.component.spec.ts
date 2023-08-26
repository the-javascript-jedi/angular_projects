import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFiveComponent } from './tab-five.component';

describe('TabFiveComponent', () => {
  let component: TabFiveComponent;
  let fixture: ComponentFixture<TabFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
