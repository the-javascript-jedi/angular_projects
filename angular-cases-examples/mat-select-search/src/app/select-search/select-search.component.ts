import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { countries } from './datasets';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss']
})
export class SelectSearchComponent implements OnInit {

  constructor() { }
   countries: Record<string, string>[] = countries;
    filteredCountries: Record<string, string>[] = [];
  ngOnInit(): void {
  }

}
