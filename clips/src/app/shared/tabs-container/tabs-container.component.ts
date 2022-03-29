import { Component, OnInit,ContentChildren,AfterContentInit,QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit,AfterContentInit {
  // using ContenChildren decorator we can access a component specified inside the ng-content tags
  @ContentChildren(TabComponent) tabs={};
  // using type safety
  // @ContentChildren(TabComponent) tabs?:QueryList<TabComponent>=new QueryList;
  constructor() { }

  ngOnInit(): void {
    console.log("this.tabs",this.tabs)
  }
  // After COntent is initialized
  ngAfterContentInit():void{
   console.log("this.tabs",this.tabs)
  }
}
