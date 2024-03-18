import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "../courses/model/course";
import { Observable } from "rxjs";
import { CoursesService } from "../courses/services/courses.service";
import { first } from "rxjs/operators";

@Injectable()
export class CourseResolver implements Resolve<Course>{
    constructor(private courses:CoursesService){   }
    //  http://localhost:4200/courses/angular-router-course
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Course>{
        // get the path variable - courseUrl
        const courseUrl=route.paramMap.get("courseUrl")
        return this.courses.loadCourseByUrl(courseUrl).pipe(
            // first - take the first value emitted by a given observable and then we complete the resulting observable
            first()
        );
    }
}