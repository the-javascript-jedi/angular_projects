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
     console.log("ngOnInit() called");
    this.taskService.getTasksService().subscribe(response=>{
      this.tasks=response;
    });
  }  
 //getTasks from api
 getTasks(){
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
  // Add Task]
  addTask(task:TaskInterface){
    // console.log("addTask-task",task);
    this.taskService.addTaskService(task).subscribe((response)=>{
        // we will get the added task as response
        // we need to push this to this.tasks
        // this.tasks.push(task);
        //call the api to display the tasks
        this.getTasks();
    });
  }
}
