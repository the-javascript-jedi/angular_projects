import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { CoursesService } from './courses.service';

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
        coursesService=TestBed.get(CoursesService);
        // initialize the testing controller for testing api request
        // httpTestingController=TestBed.get(HttpTestingController)
        httpTestingController=TestBed.inject(HttpTestingController)
    })

    it('should retrieve all  courses',()=>{
        
    })
})