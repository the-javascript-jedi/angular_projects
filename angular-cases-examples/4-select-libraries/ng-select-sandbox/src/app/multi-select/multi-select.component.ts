import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' }
  ];

  selectedCities: number[];

   onChange(event: any) {
    console.log('Selected city ID:', event);
  }
}
