import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-five',
  templateUrl: './tab-five.component.html',
  styleUrls: ['./tab-five.component.scss']
})
export class TabFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
ngOnDestroy(): void {
    console.log("app-tab-five--ngOnDestroy"); 
  }
}
