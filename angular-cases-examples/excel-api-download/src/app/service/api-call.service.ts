import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  postAndGetResponse() {
    return this.http.get(' http://127.0.0.1:8001/user/payments/xlsx', { responseType: 'blob' as 'blob' });
  }
}
