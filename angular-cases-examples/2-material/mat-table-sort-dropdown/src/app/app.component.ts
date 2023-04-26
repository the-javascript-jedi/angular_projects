import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatSortable, Sort } from '@angular/material/sort/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  desserts: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4
    },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 }
  ];

  columns = [
    { columnName: 'name', value: 'Dessert (100g)' },
    { columnName: 'calories', value: 'Calories' },
    { columnName: 'fat', value: 'Fat (g)' },
    { columnName: 'carbs', value: 'Carbs (g)' },
    { columnName: 'protein', value: 'Protein (g)' }
  ];
  displayedColumns = this.columns.map(item => item.columnName);
  columnsControl = new FormControl();
  dataSource = new MatTableDataSource(this.desserts);

  constructor() {
    this.columnsControl.valueChanges.subscribe(value => this.sortData(value));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortData(fieldName: string) {
    if (!fieldName) {
      return;
    }

    const sortState: MatSortable = {
      id: fieldName,
      start: 'desc',
      disableClear: true
    };
    this.sort.sort(sortState);
  }
}
