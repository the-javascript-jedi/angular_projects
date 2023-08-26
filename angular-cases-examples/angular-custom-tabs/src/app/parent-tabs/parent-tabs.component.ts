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

  ngOnInit(): void {
    this.parentTabName=this._sharedData.getParentTabname();
    this.childTabName=this._sharedData.getChildTabname();
  }
  tabIdParent:string="tabOne";
  tabParentChange(idClicked:string){
    console.log("idClicked",idClicked);
    this.tabIdParent=idClicked;
  }
}
