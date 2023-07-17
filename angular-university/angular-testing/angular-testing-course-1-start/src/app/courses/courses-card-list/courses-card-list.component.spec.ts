import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {COURSES} from '../../../../server/db-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {sortCoursesBySeqNo} from '../home/sort-course-by-seq';
import {Course} from '../model/course';
import {setupCourses} from '../common/setup-test-data';




describe('CoursesCardListComponent', () => {
  // we need an instance of a component, so we use component fixture
  let component:CoursesCardListComponent;
  // fixture is a utility type with lot of features which we can use for testing
  let fixture:ComponentFixture<CoursesCardListComponent>;
  // debug element used to query the dom 
  let el:DebugElement;

  // initialize test
  beforeEach(waitForAsync(()=>{
    // configure the imported modules like common module, materiale modules etc
    TestBed.configureTestingModule({
      // since we are importing the entire module no need to give individual imports
      // declarations:[],
      // make sure browser specific modules are not imported
      // i.e BrowserModule, BrowserAnimationModule
      imports:[CoursesModule]
    })
    // after test bed test setup is complete, we need to use compile components, this will give us a promise which will tell us when the compilation process is complete
    .compileComponents()
    .then(()=>{
      // create fixture
      fixture=TestBed.createComponent(CoursesCardListComponent);
      component=fixture.componentInstance;
      el=fixture.debugElement;
    })
  }))

  it("should create the component", () => {
    // expect the component is correctly instantiated
    expect(component).toBeTruthy();
    // console.log("component--courses-card-list",component);
  });


  it("should display the course list", () => {
     component.courses=setupCourses();
      // to check if data is loaded we need to call the detect changes method
      fixture.detectChanges();
      // Debugging
      // we can use the el.nativeElement to print the html of the dom element for debugging purpose
      // console.log("el.nativeElement.outerHTML",el.nativeElement.outerHTML);

      // we use the "By" predicate to identify a given dom element
      // the predicate returns true or false depending if dom element matches certain condition
      
      // we create a predicate to search the component if it has a certain div with class name
      const cards=el.queryAll(By.css(".course-card"));
      expect(cards).toBeTruthy("Could not find cards");
      expect(cards.length).toBe(12,"Unexpected number of courses");
  });


  it("should display the first course", () => {
    // pending();  
    component.courses=setupCourses();
    fixture.detectChanges();
    const course=component.courses[0];
    // grab the first element of the loaded material course card
    const card=el.query(By.css(".course-card:first-child"));
    // grab the title of the first course
    const title=card.query(By.css("mat-card-title"));
    // grab the image
    const image=card.query(By.css("img"));

    // expect a course to be loaded
    expect(card).toBeTruthy("Could not find course card");
    // grab the title content and check if it is the correct first content
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    // check if image is correctly loaded
    expect(image.nativeElement.src).toBe(course.iconUrl);

  });
});