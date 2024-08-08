import { Component } from '@angular/core';

@Component({
  selector: 'app-chess-board-ns',
  templateUrl: './chess-board-ns.component.html',
  styleUrls: ['./chess-board-ns.component.scss']
})
export class ChessBoardNsComponent {
  size: number = 8;

  // Create an 8x8 array
  rows: number[][] = Array.from({ length: this.size }, (_, rowIndex) => 
    Array.from({ length: this.size }, (_, colIndex) => rowIndex * this.size + colIndex + 1)
  );
}
