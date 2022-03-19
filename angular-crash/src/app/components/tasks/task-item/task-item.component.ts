import { Component, OnInit,Input } from '@angular/core';
import { TaskInterface} from '../../../mockData/TaskInterface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem:TaskInterface|any;

  constructor() { }

  ngOnInit(): void {
  }

}
