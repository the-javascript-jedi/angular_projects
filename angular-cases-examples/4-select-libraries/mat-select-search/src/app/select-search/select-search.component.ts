import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { countries } from './datasets';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectSearchComponent implements OnInit {

  constructor() { }
   countries: Record<string, string>[] = countries;
   periodoptions="Algeria";
   selectedData;
    filteredCountries: Record<string, string>[] = [];
  ngOnInit(): void {  }
selectedValue(event: MatSelectChange) {
  this.selectedData = {
    value: event.value,
    text: event.source.triggerValue
  };
  console.log(this.selectedData);
}
}
