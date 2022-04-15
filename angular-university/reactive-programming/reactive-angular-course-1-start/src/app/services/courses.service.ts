import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http:HttpClient) { }
  loadAllCourse():Observable<Course[]>{
    return this.http.get<Course[]>("/api/courses").pipe(map(
      res=>res["payload"]
    ),
    // since we are doing multiple subscriptions(beginnerCourses$,advancedCourses$) shareReplay must be used
    shareReplay()
    )
  }
}
