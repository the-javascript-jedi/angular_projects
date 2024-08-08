import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessBoardChatgptComponent } from './chess-board-chatgpt.component';

describe('ChessBoardChatgptComponent', () => {
  let component: ChessBoardChatgptComponent;
  let fixture: ComponentFixture<ChessBoardChatgptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChessBoardChatgptComponent]
    });
    fixture = TestBed.createComponent(ChessBoardChatgptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
