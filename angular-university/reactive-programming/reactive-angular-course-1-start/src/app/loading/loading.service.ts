import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
export class LoadingService {
  // subject - similar to observable but can emit values
  // BehaviorSubject - remebers last value emitted -- better for async operations
  private loadingSubject=new BehaviorSubject<boolean>(false);
  // we convert loadingSubject to observable so that using the loading$ we can only subscribe to it cannot emit values --this is for security purpose
  //to emit values we must use the loadingSubject
  loading$:Observable<boolean>=this.loadingSubject.asObservable();
  constructor() {
    console.log("Loading Service created!!!");
   }
  loadingOn(){
    this.loadingSubject.next(true);
  }
  loadingOff(){
    this.loadingSubject.next(false);
  }
}
