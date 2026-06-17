import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private http = inject(HttpClient);

  apiUrl: string = '/api/BusBooking/';

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'GetBusLocations');
  }

  searchBus(from: number, to: number, travelDate: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}`,
    );
  }
}
