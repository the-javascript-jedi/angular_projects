import { Component, OnInit } from '@angular/core';
// Task Data from mock backen
import {TASKS} from '../../mockData/mock-tasks';
import {TaskInterface} from '../../mockData/TaskInterface'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // set the mock data
  tasks:TaskInterface[]=TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
