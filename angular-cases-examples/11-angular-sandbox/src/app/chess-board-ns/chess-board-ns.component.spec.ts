import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessBoardNsComponent } from './chess-board-ns.component';

describe('ChessBoardNsComponent', () => {
  let component: ChessBoardNsComponent;
  let fixture: ComponentFixture<ChessBoardNsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChessBoardNsComponent]
    });
    fixture = TestBed.createComponent(ChessBoardNsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
