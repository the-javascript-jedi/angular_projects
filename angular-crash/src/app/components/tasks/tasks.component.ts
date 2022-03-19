import { Component, OnInit } from '@angular/core';
import {TaskInterface} from '../../mockData/TaskInterface'
// Import the taks from the service
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor(private taskService:TaskService) { }
  // Define an empty array
  tasks:TaskInterface[]=[];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(response=>{
      this.tasks=response;
    });
  }
}
