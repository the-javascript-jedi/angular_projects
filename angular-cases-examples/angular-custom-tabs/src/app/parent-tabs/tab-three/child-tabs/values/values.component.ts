import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log("app-values--ngOnDestroy"); 
  }
}
