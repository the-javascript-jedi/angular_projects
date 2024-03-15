import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-with-pipe',
  templateUrl: './search-with-pipe.component.html',
  styleUrls: ['./search-with-pipe.component.scss']
})
export class SearchWithPipeComponent implements OnInit {
  inputFocused = false;
  constructor() { }
  query:any;
  selectedPlaceholder:any='search company';
  selectedValue;
  items = [
    {
      id: 1,
      text: 'First item',
      selected:false
    },
    {
      id: 2,
      text: 'Second item',
      selected:false
    },
    {
      id: 3,
      text: 'Third item',
      selected:false
    }
  ];

  selectItem(selectedValue){
    // this.query=selectedValue
    let selectedIndex=this.items.findIndex(val=>val.id===selectedValue.id);
    this.items.forEach(val=>val.selected=false);
    this.items[selectedIndex].selected = true;
    // query value for search string
    this.query=selectedValue.text;
    // we set the selectedValue so we can clear the search term on focus to display other dropdown values
    this.selectedValue=selectedValue.text;
  }
  
  ngOnInit(): void {
  }

  _setFocus(focus: boolean) {
    if (!focus) {
      setTimeout(() => {
        // input unfocussed - hide dropdown
        this.inputFocused = focus;
        this.query=this.selectedValue;
      }, 200);
    } else {
      // input focussed - show dropdown
      this.inputFocused = true;
      this.query='';
    }
  }
}
