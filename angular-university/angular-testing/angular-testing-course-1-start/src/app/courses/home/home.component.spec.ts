import {async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, waitForAsync} from '@angular/core/testing';
import {CoursesModule} from '../courses.module';
import {DebugElement} from '@angular/core';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CoursesService} from '../services/courses.service';
import {HttpClient} from '@angular/common/http';
import {COURSES} from '../../../../server/db-data';
import {setupCourses} from '../common/setup-test-data';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {click} from '../common/test-utils';

describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component:HomeComponent;
  let el: DebugElement;
  let coursesService:any;  
  // simulate the beginner courses data
  // setupCourses() is a helper function to simulate the tests
  const beginnerCourses=setupCourses()
    .filter(course=>course.category==='BEGINNER')
  // simulate the advanced courses data
  const advancedCourses=setupCourses()
    .filter(course=>course.category==='ADVANCED')

  beforeEach(waitForAsync(() => {
    // testspy for the findAllCourses method inside CoursesService service    
    const coursesServiceSpy=jasmine.createSpyObj('CoursesService',['findAllCourses'])

    TestBed.configureTestingModule({
      imports:[CoursesModule,NoopAnimationsModule],
      // if we are testing api calls, we must inject a testspy so that real api calls are not made in the TestBed
      // in below providers we need to use a testspy on the service which will make the api call
      providers:[
        {provide:CoursesService,useValue:coursesServiceSpy}
      ]
    }).compileComponents()
    .then(()=>{
        fixture=TestBed.createComponent(HomeComponent);
        component=fixture.componentInstance;
        el=fixture.debugElement;
        // courses service will simulate the service call making the api request
        coursesService=TestBed.inject(CoursesService)
    })

  }));

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });


  it("should display only beginner courses", () => {
    coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
    // detect the changes in the template
    fixture.detectChanges();
    // check if the data is loaded based on the passed css
    const tabs=el.queryAll(By.css(".mdc-tab"));
    expect(tabs.length).toBe(1,"Unexpected number of tabs found");
  });


  it("should display only advanced courses", () => {
    coursesService.findAllCourses.and.returnValue(of(advancedCourses));
    // detect the changes in the template
    fixture.detectChanges();
    // check if the data is loaded based on the passed css
    const tabs=el.queryAll(By.css(".mdc-tab"));
    expect(tabs.length).toBe(1,"Unexpected number of tabs found");
  });


  it("should display both tabs", () => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    // detect the changes in the template
    fixture.detectChanges();
    // check if the data is loaded based on the passed css
    const tabs=el.queryAll(By.css(".mdc-tab"));
    expect(tabs.length).toBe(2,"Expected to find 2 tabs");
  });


  it("should display advanced courses when tab clicked", () => {
    pending();
  });
});