import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { CoursesService } from './courses.service';
import { COURSES } from '../../../../server/db-data';

describe('CoursesService',()=>{
    let coursesService:CoursesService;
    let httpTestingController:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[
                CoursesService
            ]
        });
        coursesService=TestBed.inject(CoursesService);
        // initialize the testing controller for testing api request
        // httpTestingController=TestBed.get(HttpTestingController)
        httpTestingController=TestBed.inject(HttpTestingController)
    })

    it('should retrieve all  courses',()=>{
        coursesService.findAllCourses()
        .subscribe(courses=>{
            expect(courses).toBeTruthy('No Courses Returned');
            // course length test
            expect(courses.length).toBe(12,"incorrect number of courses");
            // check the course id:12 is angular testing course
            const course=courses.find(course=>course.id==12);
            expect(course.titles.description).toBe("Angular Testing Course");
        })
        // create a testing controller
        const req=httpTestingController.expectOne('/api/courses');
        // specify the test is a GET request
        expect(req.request.method).toEqual("GET");
        // use flush method to pass some test data to the api
        req.flush({payload:Object.values(COURSES)})
        
    })

    // find course by id
     it('should find a course by id',()=>{
        coursesService.findCourseById(12)
        .subscribe(course=>{
            expect(course).toBeTruthy('No Courses Returned');
            // check the course id:12 
            expect(course.id).toBe(12);            
        })
        // create a testing controller
        const req=httpTestingController.expectOne('/api/courses/12');
        // specify the test is a GET request
        expect(req.request.method).toEqual("GET");
        // use flush method to pass some test data to the api
        req.flush(COURSES[12]);
       
    })
    // verify that no extra api calls are made
    afterEach(()=>{
        httpTestingController.verify();
    })
})