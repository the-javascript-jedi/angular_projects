import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checkbox-table';
  masterSelected:boolean;
  checklist:any;
  checkedList:any;

 constructor(){
  this.masterSelected = false;
   this.checklist =[
    {id:1,isSelected:false,value:'dumpling'},
    {id:2,isSelected:true,value:'burger'},
    {id:3,isSelected:false,value:'sandwich'},
  ]
  this.getCheckedItemList();
 }

 // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
    console.log("this.checkedList ",this.checkedList )
  }


}
