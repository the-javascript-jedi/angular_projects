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
  checkedAnyList:any;

  constructor() {
     this.highSelected = false;
   this.checklist =[
    {id:1,isHighSelected:false,isMediumSelected:false,isAnySelected:false,value:'nexus 2000'},
    {id:2,isHighSelected:true,isMediumSelected:false,isAnySelected:false,value:'nexus 3000'},
    {id:3,isHighSelected:true,isMediumSelected:false,isAnySelected:false,value:'nexus 4000'},
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
  isAllHighSelected(selectedItem:any) {
    console.log("selectedItem-high column",selectedItem);
    if(selectedItem.isHighSelected==true&&selectedItem.isMediumSelected===true){
      selectedItem.isAnySelected=true;
    }else{
      selectedItem.isAnySelected=false;
    }
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
   isAllMediumSelected(selectedItem:any) {
    console.log("selectedItem-medium column",selectedItem);
    if(selectedItem.isHighSelected==true&&selectedItem.isMediumSelected===true){
      selectedItem.isAnySelected=true;
    }else{
      selectedItem.isAnySelected=false;
    }
    this.mediumSelected = this.checklist.every(function(item:any) {
        return item.isMediumSelected == true;
      })
    this.getCheckedMediumItemList();
  }


  checkUncheckAllLow(){

  }
 // Any
  checkUncheckAllAny(){
     for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isAnySelected = this.anySelected;
    }
    this.getCheckedAnyItemList();
  }
  getCheckedAnyItemList(){
    this.checkedAnyList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isAnySelected)
      this.checkedAnyList.push(this.checklist[i]);
    }
    // remove checked items
    // this.checkedAnyList.forEach(val=>{
    //   val.isHighSelected=false;
    //   val.isMediumSelected=false;
    // })
    this.checkedAnyList = JSON.stringify(this.checkedAnyList);
    console.log("this.checkedAnyList ",this.checkedAnyList )
  }
   isAllAnySelected(selectedItem:any) {
    console.log("selectedItem--any column",selectedItem);
     if(selectedItem.isAnySelected==false){
      selectedItem.isHighSelected=false;
      selectedItem.isMediumSelected=false;
    }else{
      selectedItem.isHighSelected=true;
      selectedItem.isMediumSelected=true;
    }
    this.anySelected = this.checklist.every(function(item:any) {
        return item.isAnySelected == true;
      })
      console.log("this.anySelected",this.anySelected)
    this.getCheckedAnyItemList();
  }

  submitModal(){
    console.log("this.checklist",this.checklist)
  }
}
