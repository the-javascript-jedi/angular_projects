import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, Observable, of, timer,noop} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { createHttpObservable } from '../common/util';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    advancedCourses$:Observable<Course[]>;
    beginnerCourses$: Observable<Course[]>;
    constructor() {

    }

    ngOnInit() {
        // get the data in an observable
        const http$=createHttpObservable("/api/courses");
        // map through the observable and get the necessary data
        const courses$: Observable<Course[]>=http$.pipe(map(res=>Object.values(res["payload"])),shareReplay())
         // subscribe to the data
        /*RxjS Approach */        
        this.beginnerCourses$=courses$.pipe(map(function(courses){
            console.log("courses",courses)
            return courses.filter(course=>course.category==="BEGINNER")
        }))
         this.advancedCourses$=courses$.pipe(map(function(courses){
            console.log("courses",courses)
            return courses.filter(course=>course.category==="ADVANCED")
        }))
    }

}
