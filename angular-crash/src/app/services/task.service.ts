import { Injectable } from '@angular/core';
// import rxjs for the making api calls
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
// Task Data from mock backend
// import {TASKS} from '../mockData/mock-tasks';
import {TaskInterface} from '../mockData/TaskInterface'



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl="http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }

  ngOnInit():void{
  }

  getTasks():Observable<TaskInterface[]>{
    // Using Mock Local JSON data
    // we return an observable directly of type task interface
    // of will turn data into an observable
    // const tasks=of(TASKS);    
    // return tasks;

    //using API Data
    return this.http.get<TaskInterface[]>(this.apiUrl);

  }
}
