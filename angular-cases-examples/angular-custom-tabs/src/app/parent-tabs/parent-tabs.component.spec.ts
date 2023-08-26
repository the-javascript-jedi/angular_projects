import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTabsComponent } from './parent-tabs.component';

describe('ParentTabsComponent', () => {
  let component: ParentTabsComponent;
  let fixture: ComponentFixture<ParentTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
