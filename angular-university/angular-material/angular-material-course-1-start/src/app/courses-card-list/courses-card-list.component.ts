import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import { MatDialog } from "@angular/material/dialog";
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {
    @Input()
    courses: Course[];

    constructor(private dialog:MatDialog) {   }
    ngOnInit() {    }
    // We have encapsulated the logic of opening the dialogue here in Save a Function, the open edit course dialog function.
    editCourse(course:Course) {  
        // open the modal
        openEditCourseDialog(this.dialog,course).pipe(filter(val=>!!val)).subscribe(
            val=>console.log("new course value:",val)
        )
    }
}