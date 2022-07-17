import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../loading/loading.service';
import { MessagesService } from '../messages/messages.service';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    providers:[
        LoadingService,
        MessagesService
    ]
})
export class CourseDialogComponent implements AfterViewInit {
    form: FormGroup;
    course:Course;
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course,
        private coursesService:CoursesService,
        private loadingService:LoadingService,
        private messagesService:MessagesService,
        ) {
        this.course = course;
        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });
        const changes=this.form.value
        const saveCourse$=this.coursesService.saveCourse(this.course.id,changes);
        // call loading service and pass the observable
        this.loadingService.showLoaderUntilCompleted(saveCourse$)
    }
    ngAfterViewInit() {}
    save() {
      const changes = this.form.value;
      const saveCourse$=this.coursesService.saveCourse(this.course.id,changes).pipe(
        catchError(err=>{
            const message="Could not save course";
            console.log("message,err",message,err);
            this.messagesService.showErrors(message);
            return throwError(err);
        })
      )
    //   make api request
    this.loadingService.showLoaderUntilCompleted(saveCourse$)
        .subscribe(
            val=>{
                this.dialogRef.close(val);
            }
        )
    }
    close() {
        this.dialogRef.close();
    }
}