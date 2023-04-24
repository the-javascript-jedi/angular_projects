import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chkbox',
  templateUrl: './column-chkbox.component.html',
  styleUrls: ['./column-chkbox.component.scss']
})
export class ColumnChkboxComponent implements OnInit {
  title = 'checkbox-table';
  highSelected:boolean;
  mediumSelected:boolean;
  lowSelected:boolean;
  anySelected:boolean;
  checklist:any;
  checkedHighList:any;
  checkedMediumList:any;

  constructor() {
     this.highSelected = false;
   this.checklist =[
    {id:1,isHighSelected:false,isMediumSelected:false,value:'nexus 2000'},
    {id:2,isHighSelected:true,isMediumSelected:false,value:'nexus 3000'},
    {id:3,isHighSelected:false,isMediumSelected:false,value:'nexus 4000'},
  ]
  this.getCheckedHighItemList();
   }

  ngOnInit(): void {
  }
  // High
  // The master checkbox will check/ uncheck all items for HIGH
  checkUncheckAllHigh() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isHighSelected = this.highSelected;
    }
    this.getCheckedHighItemList();
  }

  // Check All Checkbox Checked for HIGH
  isAllHighSelected() {
    this.highSelected = this.checklist.every(function(item:any) {
        return item.isHighSelected == true;
      })
    this.getCheckedHighItemList();
  }

  // Get List of Checked Items for HIGH
  getCheckedHighItemList(){
    this.checkedHighList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isHighSelected)
      this.checkedHighList.push(this.checklist[i]);
    }
    this.checkedHighList = JSON.stringify(this.checkedHighList);
    console.log("this.checkedHighList ",this.checkedHighList )
  }
  // Medium
  checkUncheckAllMedium(){
     for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isMediumSelected = this.mediumSelected;
    }
    this.getCheckedMediumItemList();
  }
  getCheckedMediumItemList(){
    this.checkedMediumList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isMediumSelected)
      this.checkedMediumList.push(this.checklist[i]);
    }
    this.checkedMediumList = JSON.stringify(this.checkedMediumList);
    console.log("this.checkedMediumList ",this.checkedMediumList )
  }
   isAllMediumSelected() {
    this.mediumSelected = this.checklist.every(function(item:any) {
        return item.isMediumSelected == true;
      })
    this.getCheckedHighItemList();
  }


  checkUncheckAllLow(){

  }
  checkUncheckAllAny(){

  }

  submitModal(){
    console.log("this.checklist",this.checklist)
  }
}
