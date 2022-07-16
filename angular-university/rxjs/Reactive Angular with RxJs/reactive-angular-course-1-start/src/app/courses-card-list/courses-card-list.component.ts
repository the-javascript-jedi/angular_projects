import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
 import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import { filter, tap } from 'rxjs/operators';
@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  @Input()
  courses:Course[]=[];
  // Event Emitter
  @Output()
  private coursesChanged=new EventEmitter();

  ngOnInit(): void {
  }
 editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = course;
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
    // on successfull PUT/ Edit request in model
    dialogRef.afterClosed().pipe(
      // consider cases where value is emitted when dialog is closed
      filter(val=>!!val),
      //emit only when dialog close contains value
      //we are emiiting value to alert the outside data that course data has changed
      tap(()=>this.coursesChanged.emit())
    ).subscribe();

  }
}

