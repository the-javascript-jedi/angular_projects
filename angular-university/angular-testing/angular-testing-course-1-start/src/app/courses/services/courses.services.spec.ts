import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { CoursesService } from './courses.service';
import { COURSES, findLessonsForCourse } from '../../../../server/db-data';
import { Course } from '../model/course';
import { HttpErrorResponse } from '@angular/common/http';

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
    // save the course
    it("should save the course data",()=>{
        // we are changing only part of data in update PUT request, so we use partial class
        // changes is the updated data passed to the api, we need to pass the created partial changes data to the testing using flush
        const changes:Partial<Course>={titles:{description:'Testing Course'}};
        // check the id to be 12
        coursesService.saveCourse(12,changes).subscribe(course=>{
            expect(course.id).toBe(12);
        })
        // trigger a request
        const req=httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual("PUT");
        expect(req.request.body.titles.description).toEqual(changes.titles.description);
        req.flush({...COURSES[12],...changes});

    })
    // server error scenarion
    it("should give an error if save course fails",()=>{
        const changes:Partial<Course>={titles:{description:'Testing Course'}};
        coursesService.saveCourse(12,changes).subscribe(()=>{
            fail("the save course operation should have failed")
        },
        (error:HttpErrorResponse)=>{
            expect(error.status).toBe(500);
        })
        // trigger a request
        const req=httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual("PUT");
        req.flush("Save Course failed",{status:500,statusText:'Internal Server Error'});
    })

     it("should find a list of lessons",()=>{
        coursesService.findLessons(12).subscribe(lessons=>{
            expect(lessons).toBeTruthy();
            // expect the results to have a lesson length from response of 3
            expect(lessons.length).toBe(3);
        })
        // trigger a request 
        // pass the params to the request i.e /api/lessons?courseId=12&pageNumber=0
        const req=httpTestingController.expectOne(req=>req.url=='/api/lessons');
        expect(req.request.method).toEqual("GET");
        // expect the request params
        expect(req.request.params.get('courseId')).toEqual("12");
        expect(req.request.params.get('filter')).toEqual("");
        expect(req.request.params.get('sortOrder')).toEqual("asc");
        expect(req.request.params.get('pageNumber')).toEqual("0");
        expect(req.request.params.get('pageSize')).toEqual("3");
        // slice a value from the data and pass it to the flush method to verify correct data is passed
        // we use a helper method to assign object key values and get response, same method is also used here
        req.flush({
            payload:findLessonsForCourse(12).slice(0,3)
        })
     })
    // verify that no extra api calls are made
    afterEach(()=>{
        httpTestingController.verify();
    })
})