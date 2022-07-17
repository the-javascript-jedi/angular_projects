import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
export class MessagesService {
  // create a subject for sending the error as observables
  private subject=new BehaviorSubject<string[]>([]);
    // create an observable from subject for security purpose so the error$ variable is used for subscribing alone, to emit values we must use the subject variable
  errors$:Observable<string[]>=this.subject.asObservable().pipe(
    // remove the empty array which we use to initialize the value
    filter(messages=>messages&&messages.length>0)
  ) 
  // a new value is emitted using which angular application is notified that an error is present
  showErrors(...errors:any){
    this.subject.next(errors);
  }
  constructor() { }
}
