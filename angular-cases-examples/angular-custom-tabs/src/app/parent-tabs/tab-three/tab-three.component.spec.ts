import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabThreeComponent } from './tab-three.component';

describe('TabThreeComponent', () => {
  let component: TabThreeComponent;
  let fixture: ComponentFixture<TabThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
