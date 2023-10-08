/////////////////////////////////////////////////////////////////////
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { TableWithGraphComponentDirectService } from './table-with-graph.component';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

describe('UserListComponent', () => {
  let component: TableWithGraphComponentDirectService;
  let fixture: ComponentFixture<TableWithGraphComponentDirectService>;
  let httpTestingController: HttpTestingController;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithGraphComponentDirectService],
      providers: [],
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(TableWithGraphComponentDirectService);
    component = fixture.componentInstance;   
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  //  afterEach(() => {
  //   httpMock.verify(); // Ensure that there are no outstanding requests.
  // });

it('should check loadResponse is defined', () => {
    // Trigger change detection
    fixture.detectChanges();
        const mockResponse = {
      'responseDataFromAPI': [
        { contribution: 10 },
        { contribution: -5 }
      ]
    };
    // Check that the component's name property was updated
    expect(component.loadResponse).toBeDefined()
        const req = httpMock.expectOne('http://localhost:5000/api/games?&filter=&pageSize=100');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
})