import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, filter, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
// import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
// import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../loading/loading.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  constructor(private coursesService: CoursesService,private loadingService:LoadingService) { }
  ngOnInit() {
    console.log("ngOnInit homne")
    this.reloadCourses(); 
  } 
  reloadCourses(){
    // show loading indicator
    this.loadingService.loadingOn();
    // since we are doing multiple subscriptions(beginnerCourses$,advancedCourses$) shareReplay must be used
    const course$=this.coursesService.loadAllCourse().pipe(map(
      courses=>courses.sort(function compare(c1,c2){
        return c1.seqNo - c2.seqNo;
      })
    ),
    // finalize - will run after loadAllCourse observable is completed
    finalize(()=>{
      this.loadingService.loadingOff();
    })
    )
    // beginner
    this.beginnerCourses$=course$.pipe(
      map(courses=>courses.filter(course=>course.category=="BEGINNER"))
    )
    // advanced
    this.advancedCourses$=course$.pipe(
      map(courses=>courses.filter(course=>course.category=="ADVANCED"))
    )
  }
}