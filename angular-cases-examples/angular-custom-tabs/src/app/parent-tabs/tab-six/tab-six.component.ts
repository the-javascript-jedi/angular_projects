import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-six',
  templateUrl: './tab-six.component.html',
  styleUrls: ['./tab-six.component.scss']
})
export class TabSixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log("app-tab-six--ngOnDestroy"); 
  }
}
