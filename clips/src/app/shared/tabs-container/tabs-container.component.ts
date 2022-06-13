import { Component, OnInit,ContentChildren,AfterContentInit,QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  // using ContenChildren decorator we can access a component specified inside the ng-content tags
  @ContentChildren(TabComponent) tabs?:QueryList<TabComponent>=new QueryList();
  // using type safety
  // @ContentChildren(TabComponent) tabs?:QueryList<TabComponent>=new QueryList;
  constructor() { }
  // After COntent is initialized
  ngAfterContentInit():void{
   console.log("this.tabs--ngAfterContentInit",this.tabs);
    const activeTabs=this.tabs?.filter(
      tab=>tab.active
    )
    if(!activeTabs||activeTabs.length===0){
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab:TabComponent){
    this.tabs?.forEach(tab=>{
      tab.active=false;
    })
    tab.active=true;
    // will remove # from url which was default behaviour
    return false;
  }
}
