import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSixComponent } from './tab-six.component';

describe('TabSixComponent', () => {
  let component: TabSixComponent;
  let fixture: ComponentFixture<TabSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
