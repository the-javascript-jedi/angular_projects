// import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ApiDataService } from "./api-data.service";
import { TestBed } from "@angular/core/testing";

// import { ApiDataService } from './api-data.service';

// describe('ApiDataService', () => {
//   let service: ApiDataService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ApiDataService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('MyService', () => {
  //   let component: TableWithGraphComponent;
  // let fixture: ComponentFixture<TableWithGraphComponent>;
  // let userService: ApiDataService;
  // let httpTestingController: HttpTestingController;

  let service: ApiDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiDataService]
    });

    service = TestBed.inject(ApiDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should handle success response', () => {
    const mockData = { data: 'test' };
    let response: any;

    service.getHorizontalTableData(1).subscribe(res => {
      response = res;
    });

    const req = httpMock.expectOne('http://localhost:5000/api/games?&pageSize=1');
    req.flush(mockData);

    expect(response).toEqual(mockData);
  });

  it('should handle error response', () => {
    const mockError = { status: 500, statusText: 'Server Error' };
    let errorResponse: any;

    service.getHorizontalTableData(1).subscribe(
      () => {},
      err => {
        errorResponse = err;
      }
    );

    const req = httpMock.expectOne('http://localhost:5000/api/games?&pageSize=1');
    req.flush(null, mockError);

    expect(errorResponse.status).toEqual(500);
    expect(errorResponse.statusText).toEqual('Server Error');
  });
});