import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private chartSelectedDate:any;  
  constructor() { }
  // create a subject
  private subject=new Subject<any>();
  //change the observable value
  setChartDate(data:any):void{
    this.chartSelectedDate=data;
    // emit the observable using the subject
    this.subject.next(this.chartSelectedDate);
  }
    getChartDate():Observable<any>{
    return this.subject.asObservable();
  }


}
