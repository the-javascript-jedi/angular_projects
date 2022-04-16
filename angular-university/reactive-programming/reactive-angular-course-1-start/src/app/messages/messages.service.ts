import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class MessagesService {
  constructor() { }
  // implement behaviour subject so last value is emitted
  private subject=new BehaviorSubject<string[]>([])
  // create an observable from subject for security purpose so the error$ variable is used for subscribing alone, to emit values we must use the subject variable
  error$:Observable<string[]>=this.subject.asObservable();
  showErrors(...errors:string[]){
    // emit the errors only using the subject variable
    this.subject.next(errors)
  }
}
