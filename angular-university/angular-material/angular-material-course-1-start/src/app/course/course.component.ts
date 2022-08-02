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
    // only one lesson is expanded
    expandedLesson:Lesson=null;

    @ViewChild(MatPaginator) paginator:MatPaginator;
    @ViewChild(MatSort) sort:MatSort;

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
      // this.sort?.direction??"asc" - check if sort is available else use "asc" as default initially
      this.coursesService.findLessons(this.course.id,this.sort?.direction??"asc",this.paginator?.pageIndex??0,this.paginator?.pageSize??3,this.sort?.active??"seqNo")
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
    onToggleLesson(lesson:Lesson){
      if(lesson==this.expandedLesson){
        // collapse lesson
        this.expandedLesson=null;
      }else{
        // expand lesson
        this.expandedLesson=lesson;
      }
    }
    ngAfterViewInit() {
      // reset the paginator when we sort
      this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0);
      // merge the sort and pagination observable
      merge(this.sort.sortChange,this.paginator.page)
        .pipe(
          tap(()=>this.loadLessonsPage())
        )
        .subscribe()
     }
}