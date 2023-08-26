import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-tabs',
  templateUrl: './child-tabs.component.html',
  styleUrls: ['./child-tabs.component.scss']
})
export class ChildTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // on load apply active tab
  childIdTab:any="mission";
  // apply active tab based on click
  tabChildChange(idClicked:string){
    // console.log("idClicked",idClicked);
    this.childIdTab=idClicked;
  }
}
