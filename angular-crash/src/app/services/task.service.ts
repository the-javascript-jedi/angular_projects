import { Injectable } from '@angular/core';
// import rxjs for the making api calls
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
// Task Data from mock backend
// import {TASKS} from '../mockData/mock-tasks';
import {TaskInterface} from '../mockData/TaskInterface'

// httpOptions for making a request
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl="http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }

  ngOnInit():void{
  }

  getTasksService():Observable<TaskInterface[]>{
    // Using Mock Local JSON data
    // we return an observable directly of type task interface
    // of will turn data into an observable
    // const tasks=of(TASKS);    
    // return tasks;

    //using API Data
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }
  // Delete Task 
  deleteTaskService(task:TaskInterface):Observable<TaskInterface>{
    const url=`${this.apiUrl}/${task.id}`;
    // we return an observable
    return this.http.delete<TaskInterface>(url);
  }
  // Update Task Reminder
  updateTaskReminder(task:TaskInterface):Observable<TaskInterface>{
      const url=`${this.apiUrl}/${task.id}`;
      return this.http.put<TaskInterface>(url,task,httpOptions);    
  }
  // Add Task Servicwe
  addTaskService(task:TaskInterface):Observable<TaskInterface>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.post<TaskInterface>(this.apiUrl,task,httpOptions)
  }
}
