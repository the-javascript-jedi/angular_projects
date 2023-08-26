import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.scss']
})
export class TabThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log("app-tab-three--ngOnDestroy"); 
  }
}
