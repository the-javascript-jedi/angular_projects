import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit {

  constructor(private _sharedData:SharedDataService) { }

  ngOnInit(): void {
  }

    navigateToTab(parentTabName,childTabName){
      this._sharedData.setParentTabname(parentTabName);
      this._sharedData.setChildTabname(childTabName);
  }
   ngOnDestroy(): void {
    console.log("app-parent-tabs--ngOnDestroy"); 
    this._sharedData.resetSelectedParentTab();
    this._sharedData.resetSelectedChildTab();
  }
}
