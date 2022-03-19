import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public title:string="Angular Task Tracker";
  ngOnInit(): void {
  }
  //Step 5 - specify the click event 
  toggleAddTask(){
    console.log("Header - toggle add task");
  }
}
