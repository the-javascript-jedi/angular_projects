import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-ddl-filter',
  templateUrl: './mat-ddl-filter.component.html',
  styleUrls: ['./mat-ddl-filter.component.scss']
})
export class MatDdlFilterComponent implements OnInit {
  
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  symbol: any=null;
  name: any=null;
  applyFilter(name: string, symbol) {
    this.dataSource.filter = name + "," + symbol;
  }
  constructor() { }

  ngOnInit(): void {
    this.dataSource.filterPredicate = this.customFiltered();
    this.symbol="";
    this.name="";
  }
  customFiltered() {
    return (data, filter) => {
      if (this.name && this.symbol)
        return data.name == this.name && data.symbol == this.symbol
      if (this.name)
        return data.name == this.name
      if (this.symbol)
        return data.symbol == this.symbol
      return true
    }
  }
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'Low' },
  { position: 2, name: 'Hydrogen', weight: 4.0026, symbol: 'Med' },
  { position: 3, name: 'Hydrogen', weight: 6.941, symbol: 'High' },
  { position: 4, name: 'Hydrogen', weight: 9.0122, symbol: 'Low' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'Low' },
  { position: 6, name: 'Boron', weight: 12.0107, symbol: 'High' },
  { position: 7, name: 'Boron', weight: 14.0067, symbol: 'Med' },
  { position: 8, name: 'Boron', weight: 15.9994, symbol: 'Low' },
  { position: 9, name: 'Boron', weight: 18.9984, symbol: 'High' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Low' },
  { position: 11, name: 'Neon', weight: 22.9897, symbol: 'High' },
  { position: 12, name: 'Neon', weight: 24.305, symbol: 'Med' },
  { position: 13, name: 'Neon', weight: 26.9815, symbol: 'Low' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Low' },
  { position: 15, name: 'Silicon', weight: 30.9738, symbol: 'High' },
  { position: 16, name: 'Silicon', weight: 32.065, symbol: 'Med' },
  { position: 17, name: 'Silicon', weight: 35.453, symbol: 'Low' },
  { position: 18, name: 'Calcium', weight: 39.948, symbol: 'Low' },
  { position: 19, name: 'Calcium', weight: 39.0983, symbol: 'Med' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'High' },
];
// // Original
// const ELEMENT_DATA: Element[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ];