import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
    description:string;

    form=this.fb.group({
        description:[this.course.description,Validators.required],
        category:[this.course.category,Validators.required],
        releasedAt:[new Date(),Validators.required],
        longDescription:[this.course.longDescription,Validators.required],
    })
    //@Inject(MAT_DIALOG_DATA)-Inject the Dialog Input data passed via MatDialogConfig object
    // dialogRef - passed to close the modal
    constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) private course:Course,private dialogRef:MatDialogRef<CourseDialogComponent>) {
        this.description=course.description;
    }
    ngOnInit() {

    }
    close(){
        this.dialogRef.close();
    }
    save(){
        this.dialogRef.close(this.form.value);
    }

}
export function openEditCourseDialog(dialog:MatDialog,course:Course){
 const config=new MatDialogConfig();
 // escape click will not close popup
 config.disableClose=true;
 //focus on popup
 config.autoFocus=true;
 // pass data to dialog
 config.data={
    ...course
 }
//  open using dialog service
const dialogRef=dialog.open(CourseDialogComponent,config);
// return observable after dialog is closed
return dialogRef.afterClosed();

}