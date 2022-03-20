import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { TaskInterface} from '../../../mockData/TaskInterface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem:TaskInterface|any;
  // in parent component html we need to specify this event emitter
  @Output() onDeleteTaskOutputEvent:EventEmitter<TaskInterface>= new EventEmitter();
  @Output() onToggleReminderOutputEvent:EventEmitter<TaskInterface>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:any){
    this.onDeleteTaskOutputEvent.emit(task);
  }
  onToggleClick(task:any){
      this.onToggleReminderOutputEvent.emit(task);
  }
}
