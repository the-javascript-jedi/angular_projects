import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
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

  constructor(private _uiService:UiService) {
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
}
