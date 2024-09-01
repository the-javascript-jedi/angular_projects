import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-one',
  templateUrl: './select-one.component.html',
  styleUrls: ['./select-one.component.scss']
})
export class SelectOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 cities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' }
  ];

  selectedCity: number;
    onChange(event: any) {
    console.log('Selected city ID:', event);
  }
}
