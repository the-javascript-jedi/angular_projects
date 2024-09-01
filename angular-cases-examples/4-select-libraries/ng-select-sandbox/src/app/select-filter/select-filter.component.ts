import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 allCities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'Houston' },
    { id: 5, name: 'Phoenix' }
  ];

  cities = [...this.allCities]; // Initially, all cities are shown
  selectedCity: number;

  onSearch(term) {
    if (typeof term === 'string' && term) {
      this.cities = this.allCities.filter(city => city.name.toLowerCase().includes(term.toLowerCase()));
    } else {
      this.cities = [...this.allCities];
    }
  }

}
