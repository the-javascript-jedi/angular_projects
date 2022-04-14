import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../model/course";
import {
    debounceTime,
    distinctUntilChanged,
    startWith,
    tap,
    delay,
    map,
    concatMap,
    switchMap,
    withLatestFrom,
    concatAll, shareReplay
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat} from 'rxjs';
import {Lesson} from '../model/lesson';
import { createHttpObservable } from '../common/util';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {
    course$: Observable<Course>;
    lessons$: Observable<Lesson[]>;
    courseIdParams:any;

    @ViewChild('searchInput', { static: true }) input: ElementRef;
    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        this.courseIdParams = this.route.snapshot.params['id'];
        this.course$=createHttpObservable(`/api/courses/${this.courseIdParams}`)
        // this.lessons$=this.loadLessons();
    }

    ngAfterViewInit() {
        //distinctUntilChanged() - If two consecutive values are exactly the same, we only want to emit one value and we can get that functionality using the distinct until changed operator with this operator, we no longer will have duplicate values in our output.
        //switchMap()-switch map is going to unsubscribe from the search that was still ongoing when we type new value.That is an outdated search and the Http  request is going to be canceled. 
        const searchLessons$=fromEvent<any>(this.input.nativeElement,'keyup').pipe(
            map(event=>event.target.value),
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(search=>this.loadLessons(search))
        )
        //initial page load search observable
        const initialLessons$=this.loadLessons();
        // use concat and combine two observables
        this.lessons$=concat(initialLessons$,searchLessons$)
     }
    //  make search api request
    loadLessons(search=""):Observable<Lesson[]>{
        return createHttpObservable(`/api/lessons?courseId=${this.courseIdParams}&pageSize=100&filter=${search}`).pipe(map(res=>res["payload"]))
    }
}
