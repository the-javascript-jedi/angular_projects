import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { TableWithGraphComponent } from './table-with-graph.component';
import { ApiDataService} from '../services/api-data.service';
import { By } from '@angular/platform-browser';
import { async, asyncScheduler, of, throwError } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';
// for api response
// import { of } from 'rxjs';

//api testing
// import { ObserverThrowUnitTestComponent } from './observer-throw-unit-test.component';
// import { ObserverThrowService } from './observer-throw.service';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
describe('UserListComponent', () => {
  let component: TableWithGraphComponent;
  let fixture: ComponentFixture<TableWithGraphComponent>;
  let userService: ApiDataService;
  let httpTestingController: HttpTestingController;
  // let _observerThrowService: ObserverThrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithGraphComponent],
      providers: [ApiDataService],
      imports: [HttpClientTestingModule]
    });

    fixture = TestBed.createComponent(TableWithGraphComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(ApiDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
it('should check if name is same', () => {
    // Trigger change detection
    fixture.detectChanges();
    // Check that the component's name property was updated
    expect(component.name).toEqual('test name');
  });  
//// ::::::check calculateBorderColor::::::
it('should check if name is positive', () => {
    // Trigger change detection
    fixture.detectChanges();
    component.calculateBorderColor('positive')
    // Check that the component's name property was updated
    expect(component.calculateBorderColor).toBeDefined()
  });  
  it('should check if name is negative', () => {
    // Trigger change detection
    fixture.detectChanges();
    component.calculateBorderColor('negative')
    // Check that the component's name property was updated
    expect(component.calculateBorderColor).toBeDefined()
  });  
//// ::::::check loadResponse::::::
// it("should call getUsers and return list of users", waitForAsync(() => {
//   //  const response = {
//   //       responseDataFromAPI:[{id: 0, description: "Halo: Combat Evolved", contribution: 1.93705},{id: 1, description: "Halo 2", contribution: 1.84059},{id: 2, description: "Halo 3", contribution: 1.0607}]}
//       const response = [];

//       spyOn(userService, 'getHorizontalTableData').and.returnValue(of(response))

//       component.loadResponse()

//       fixture.detectChanges();
    
//       expect(component.tableData).toEqual(response);
//     }));
  });

  // error and next
  describe('MyComponent', () => {
  //   let component: TableWithGraphComponent;
  // let fixture: ComponentFixture<TableWithGraphComponent>;
  // let userService: ApiDataService;
  // let httpTestingController: HttpTestingController;
  let component: TableWithGraphComponent;
  let httpMock: HttpTestingController;
  let myService: ApiDataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TableWithGraphComponent],
      providers: [ApiDataService]
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    myService = TestBed.inject(ApiDataService);
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(TableWithGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should handle success response', () => {
    const mockData={responseDataFromAPI:[{id: 0, description: "Halo: Combat Evolved", contribution: 1.93705}]}
    spyOn(myService, 'getHorizontalTableData').and.returnValue(of(mockData));

    component.ngOnInit();
    expect(component.tableData).toEqual(mockData.responseDataFromAPI);
  });
    it('should handle success response---val.bar_direction="positive"', () => {
    const mockData={responseDataFromAPI:[{id: 0, description: "Halo: Combat Evolved", contribution: -1.93705}]}
    spyOn(myService, 'getHorizontalTableData').and.returnValue(of(mockData));

    component.ngOnInit();
    expect(component.tableData).toEqual(mockData.responseDataFromAPI);
  });

  // it('should handle error response---val.bar_direction="negative"', () => {
  //   const mockError = new Error('An error occurred');
  //   spyOn(myService, 'getHorizontalTableData').and.throwError(mockError);

  //   component.ngOnInit();
  //   expect(component.error).toEqual(mockError);
  // });
  it('should handle error response', () => {
    const mockError = new Error('An error occurred');
    spyOn(myService, 'getHorizontalTableData').and.returnValue(throwError(mockError));

    component.ngOnInit();
    expect(component.error).toEqual(mockError);
  });
});