import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay, catchError, finalize} from 'rxjs/operators';
import {merge, fromEvent, throwError} from "rxjs";
import { Lesson } from '../model/lesson';
@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, AfterViewInit {
    course:Course;
    lessons:Lesson[];
    loading:boolean=false;
    // paginator:MatPaginator;

    @ViewChild(MatPaginator) paginator:MatPaginator;
    // lessons = [
    //    {
    //     id: 120,
    //     'description': 'Introduction to Angular Material',
    //     'duration': '4:17',
    //     'seqNo': 1,
    //     courseId: 11
    //   },
    //   {
    //     id: 121,
    //     'description': 'Navigation and Containers',
    //     'duration': '6:37',
    //     'seqNo': 2,
    //     courseId: 11
    //   },
    // ];
    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService) {
    }
    // order of the columns to be displayed inthe datatable
    displayedColumns=['seqNo','description',"duration"];
    ngOnInit() {
        this.course = this.route.snapshot.data["course"];
        // load lessons from backend for table
        this.loadLessonsPage();
    }
    loadLessonsPage(){
      this.loading=true;
      // this.paginator.pageIndex - specifies the current page - use elvis operator since we are using viewchild
      // ?? default value is 0
      this.coursesService.findLessons(this.course.id,"asc",this.paginator?.pageIndex??0,this.paginator?.pageSize??3)
        .pipe(
          tap(
            lessons=>this.lessons=lessons
          ),
          catchError(err=>{
            console.log("Error loading Lessons",err);
            alert("Error loading Lessons");
            // replacement error for catchError
            return throwError(err);
          }),
          finalize(()=>{
            this.loading=false
          })
        )
        .subscribe();
    }
    ngAfterViewInit() {  
      this.paginator.page
        .pipe(
          tap(()=>this.loadLessonsPage())
        )
        .subscribe()
     }
}