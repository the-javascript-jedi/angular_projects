import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-click',
  templateUrl: './checkbox-click.component.html',
  styleUrls: ['./checkbox-click.component.scss']
})
export class CheckboxClickComponent implements OnInit {

  ngOnInit(): void {  }
  title: String;
  names: any;
  selectedAll: any;
  constructor() {
    this.title = "Select all/Deselect all checkbox - Angular 2";
    this.names = [
      { name: 'Prashobh', selected: false },
      { name: 'Abraham', selected: false },
      { name: 'Anil', selected: false },
      { name: 'Sam', selected: false },
      { name: 'Natasha', selected: false },
      { name: 'Marry', selected: false },
      { name: 'Zian', selected: false },
      { name: 'karan', selected: false },
    ]

  }
  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function(item:any) {
        return item.selected == true;
      })
      console.log("this.names",this.names)
  }
// clickTest
clickTest(){
   this.names.forEach(val=>{
    if(val.name==="Sam"){
      val.selected=!val.selected;
    }
   })
}
}
