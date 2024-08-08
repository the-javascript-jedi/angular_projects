import { Component } from '@angular/core';

@Component({
  selector: 'app-chess-board-chatgpt',
  templateUrl: './chess-board-chatgpt.component.html',
  styleUrls: ['./chess-board-chatgpt.component.scss']
})
export class ChessBoardChatgptComponent {
// Define the size of the chessboard
size: number = 8;

// Create a 2D array to represent the chessboard
board: number[][] = Array.from({ length: this.size }, () => Array(this.size).fill(0));
}
