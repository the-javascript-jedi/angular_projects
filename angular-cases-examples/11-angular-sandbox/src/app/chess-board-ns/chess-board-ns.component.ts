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
//   // Create a 2D array of numbers
// rows: number[][] = [];

// // Loop through each row
// for (let rowIndex = 0; rowIndex < this.size; rowIndex++) {
//   let row: number[] = [];

//   // Loop through each column in the current row
//   for (let colIndex = 0; colIndex < this.size; colIndex++) {
//     // Calculate the value and add it to the row
//     row.push(rowIndex * this.size + colIndex + 1);
//   }

//   // Add the row to the rows array
//   rows.push(row);
// }
}
