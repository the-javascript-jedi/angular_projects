import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.scss']
})
export class TabOneComponent implements OnInit {

  constructor(private _sharedData:SharedDataService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log("app-tab-one--ngOnDestroy"); 
    this._sharedData.resetSelectedParentTab();
    this._sharedData.resetSelectedChildTab();
  }
}
