import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title:string="Angular Task Tracker";
  // Based on this the text and button color is changed
  showAddtask:boolean=false;
  subscription:Subscription|undefined;

  constructor(private _uiService:UiService,private _router:Router) {
    this.subscription=this._uiService.onToggle().subscribe((onToggleResponse)=>{
      this.showAddtask=onToggleResponse;
    })
  }
  ngOnInit(): void {
  }
  toggleAddTask(){
    console.log("Header - toggle add task");
    // call the service observable to 
    this._uiService.toggleAddTask();
  }
  hasRoute(routeToCheck:string){
    // returns true if it matches the current route
    // if we are on any other route other than the passed routeToCheck it will return false
    //i.e Add button must be displayed only in the "/" route so it will return true when we are on the routeToCheck page
    return this._router.url===routeToCheck;
  }
}
