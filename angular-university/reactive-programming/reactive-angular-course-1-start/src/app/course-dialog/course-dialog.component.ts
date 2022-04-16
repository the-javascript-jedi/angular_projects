import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../loading/loading.service';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    providers:[LoadingService]
})
export class CourseDialogComponent implements AfterViewInit {
    form: FormGroup;
    course:Course;
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course,
        private coursesService:CoursesService,
        private loadingService:LoadingService
        ) {
        this.course = course;
        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });
    }
    ngAfterViewInit() {}
    save() {
      this.loadingService.loadingOn();  
      const changes = this.form.value;
      // make put request with id and in body of request pass the form changes
      this.coursesService.saveCourse(this.course.id,changes).subscribe(
          // we pass a value to close the modal to identify when we make a successful PUT request
          (val)=>{
              this.dialogRef.close(val);
              this.loadingService.loadingOff();  
          }
      )
    }
    close() {
        this.dialogRef.close();
    }
}