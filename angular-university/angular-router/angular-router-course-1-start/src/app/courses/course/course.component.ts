import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    course: Course;
    couponCode: string;
    constructor(private route:ActivatedRoute) { }

    ngOnInit() {
    // the course corresponds to the key used in the courses-routing.module.ts 's resolve
    // {
    // path:':courseUrl',
    // component:CourseComponent,    
    // resolve:{
    //   course:CourseResolver
    // }
        this.course=this.route.snapshot.data["course"];
    }
}