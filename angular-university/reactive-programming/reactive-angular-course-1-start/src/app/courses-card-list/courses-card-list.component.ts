import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
 import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  @Input()
  courses:Course[]=[];
  ngOnInit(): void {
  }
 editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = course;
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
