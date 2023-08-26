import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTabsComponent } from './child-tabs.component';

describe('ChildTabsComponent', () => {
  let component: ChildTabsComponent;
  let fixture: ComponentFixture<ChildTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
