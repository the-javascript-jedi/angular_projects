import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.scss']
})
export class TabThreeComponent implements OnInit {

  constructor(private _sharedData:SharedDataService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log("app-tab-three--ngOnDestroy"); 
    this._sharedData.resetSelectedParentTab();
    this._sharedData.resetSelectedChildTab();
  }
}
