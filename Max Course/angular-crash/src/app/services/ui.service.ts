import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask:boolean=false;
  // create a subject
  private subject=new Subject<any>();

  constructor() { }
  
  //change the observable value
  toggleAddTask():void{
    this.showAddTask=!this.showAddTask;
    // emit the observable using the subject
    this.subject.next(this.showAddTask);
  }

  // we must subscribe to on toggle to use the subject value
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
