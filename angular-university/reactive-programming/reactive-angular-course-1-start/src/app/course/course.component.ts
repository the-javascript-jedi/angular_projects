import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
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
  concatAll, shareReplay, catchError
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat, throwError, combineLatest} from 'rxjs';
import {Lesson} from '../model/lesson';
import { CoursesService } from '../services/courses.service';
// define an interface for single observer pattern
interface CourseData{
  course:Course;
  lessons:Lesson[]
}

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // course$: Observable<Course>;
  // lessons$: Observable<Lesson[]>;
  // single observer pattern
  data$:Observable<CourseData>
  constructor(private route: ActivatedRoute,private coursesService:CoursesService) {  }
  
  ngOnInit() {  
    const courseId=parseInt(this.route.snapshot.paramMap.get("courseId"));   
    // in single observable pattern we will combine two different observables
    //startWith -- Returns an observable that, at the moment of subscription, will synchronously emit all values provided to this operator, then subscribe to the source and mirror all of its emissions to subscribers.
    const course$=this.coursesService.loadCourseById(courseId).pipe(startWith(null));
    const lessons$=this.coursesService.loadAllCourseLessons(courseId).pipe(startWith([]));
    // single observer pattern
    // combineLatest-Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables
    //returns data in tuple format so we need to map the data to our respective type
    //whenever even one of the observables(course$,lessons$) emits a data we will emit a data of type courseData
    this.data$=combineLatest([course$,lessons$]).pipe(
      map(([course,lessons])=>{
        return{
          course,lessons
        }
      }),
      tap(console.log)
    )
  }
}