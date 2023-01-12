import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-with-pipe',
  templateUrl: './search-with-pipe.component.html',
  styleUrls: ['./search-with-pipe.component.scss']
})
export class SearchWithPipeComponent implements OnInit {

  constructor() { }
  query:any;
  items = [
    {
      id: 1,
      text: 'First item'
    },
    {
      id: 2,
      text: 'Second item'
    },
    {
      id: 3,
      text: 'Third item'
    }
  ];

  selectItem(selectedValue){
    this.query=selectedValue
  }
  ngOnInit(): void {
  }

}
