import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/mockData/TaskInterface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTaskOutputEventEmitter:EventEmitter<TaskInterface>=new EventEmitter();
  text:string="";
  day:string="";
  reminder:boolean=false;

  constructor() { }

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
