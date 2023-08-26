import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-parent-tabs',
  templateUrl: './parent-tabs.component.html',
  styleUrls: ['./parent-tabs.component.scss']
})
export class ParentTabsComponent implements OnInit {
  parentTabName="";
  childTabName="";

  constructor(private _sharedData:SharedDataService) { }
  tabIdParent:string="tabOne";

  ngOnInit(): void {
    this.parentTabName=this._sharedData.getParentTabname();
    this.childTabName=this._sharedData.getChildTabname();
    console.log("this.parentTabName",this.parentTabName)
    if(this.parentTabName!=null){
      this.tabParentChange(this.parentTabName);
    }else{
      this.tabParentChange('tabOne');
    }
  }
  tabParentChange(idClicked:string){
    // console.log("idClicked",idClicked);
    this.tabIdParent=idClicked;
  }
   ngOnDestroy(): void {
    console.log("app-parent-tabs--ngOnDestroy"); 
    this._sharedData.resetSelectedParentTab();
    this._sharedData.resetSelectedChildTab();
  }
}
