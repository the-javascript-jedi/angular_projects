import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskInterface } from 'src/app/mockData/TaskInterface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTaskOutputEventEmitter:EventEmitter<TaskInterface>=new EventEmitter();
  subscription:Subscription|undefined;
  text:string="";
  day:string="";
  reminder:boolean=false;
   // Based on this the form is displayed
  showAddTask:boolean=false;
  constructor(private _uiService:UiService) { 
    this.subscription=this._uiService.onToggle().subscribe((onToggleResponse)=>{
      this.showAddTask=onToggleResponse;
    })
  }

  ngOnInit(): void {
  }
  // Form Submit
  onSubmit=()=>{
    if(!this.text){
      alert("please add a task...");
      return;
    }

    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    // @todo - emit event
    this.onAddTaskOutputEventEmitter.emit(newTask);
    // reset the form fields
    this.text="";
    this.day="";
    this.reminder=false;
  }
}
