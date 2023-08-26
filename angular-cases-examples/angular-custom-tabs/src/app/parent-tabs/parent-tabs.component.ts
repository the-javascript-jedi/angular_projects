import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-tabs',
  templateUrl: './parent-tabs.component.html',
  styleUrls: ['./parent-tabs.component.scss']
})
export class ParentTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tabIdParent:string="tabOne";
  tabParentChange(idClicked:string){
    console.log("idClicked",idClicked);
    this.tabIdParent=idClicked;
  }
}
