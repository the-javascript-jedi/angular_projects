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
    this.taskService.getTasksService().subscribe(response=>{
      this.tasks=response;
    });
  }
  // Delete Item using service
  deleteTask(task:TaskInterface){
    this.taskService.deleteTaskService(task).subscribe(()=>{
      // once deleted remove data from ui
      this.tasks=this.tasks.filter((taskToBeRemoved)=>taskToBeRemoved.id!==task.id);
    })
  }
  // Toggle Reminder
  toggleReminder(task:TaskInterface){
    // change the status of the task reminder
    task.reminder=!task.reminder;
    console.log("task.reminder",task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
