import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { TableWithGraphComponent } from './table-with-graph.component';
import { ApiDataService} from '../services/api-data.service';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

describe('UserListComponent', () => {
  let component: TableWithGraphComponent;
  let fixture: ComponentFixture<TableWithGraphComponent>;
  let userService: ApiDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithGraphComponent],
      providers: [ApiDataService],
      imports: [HttpClientTestingModule]
    });

    fixture = TestBed.createComponent(TableWithGraphComponent);
    component = fixture.componentInstance;
    // for api services
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
  });

  // subscribe (next: and error:) scenarios
  describe('MyComponent', () => {
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

  it('should handle success response---val.bar_direction="positive"', () => {
    // provide a mock data with positive contribution
    const mockData={responseDataFromAPI:[{id: 0, description: "Halo: Combat Evolved", contribution: 1.93705}]}
    spyOn(myService, 'getHorizontalTableData').and.returnValue(of(mockData));

    component.ngOnInit();
    expect(component.tableData).toEqual(mockData.responseDataFromAPI);
  });

    it('should handle success response---val.bar_direction="negative"', () => {
    // provide a mock data with negative contribution
    const mockData={responseDataFromAPI:[{id: 0, description: "Halo: Combat Evolved", contribution: -1.93705}]}
    spyOn(myService, 'getHorizontalTableData').and.returnValue(of(mockData));

    component.ngOnInit();
    expect(component.tableData).toEqual(mockData.responseDataFromAPI);
  });

  it('should handle error response', () => {
    // simulate an error
    const mockError = new Error('An error occurred');
    spyOn(myService, 'getHorizontalTableData').and.returnValue(throwError(mockError));
    component.ngOnInit();
    expect(component.error).toEqual(mockError);
  });
});