import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-child-tabs',
  templateUrl: './child-tabs.component.html',
  styleUrls: ['./child-tabs.component.scss']
})
export class ChildTabsComponent implements OnInit {

  constructor(private _sharedDataService:SharedDataService) { }
  childTabNameLocalStorage="";

  ngOnInit(): void {
    this.childTabNameLocalStorage=this._sharedDataService.getChildTabname();
    if(this.childTabNameLocalStorage!=null){
      this.tabChildChange(this.childTabNameLocalStorage);
    }else{
      this.tabChildChange('mission')
    }
  }
  // on load apply active tab
  childIdTab:any="mission";
  // apply active tab based on click
  tabChildChange(idClicked:string){
    // console.log("idClicked",idClicked);
    this.childIdTab=idClicked;
  }
}
