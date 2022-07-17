import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { concatMap, finalize, tap } from "rxjs/operators";

@Injectable()
export class LoadingService{
  // subject - similar to observable but can emit values
  // BehaviorSubject - remebers last value emitted -- better for async operations
  private loadingSubject=new BehaviorSubject<boolean>(false);
  // we convert loadingSubject to observable so that using the loading$ we can only subscribe to it cannot emit values --this is for security purpose
  //to emit values we must use the loadingSubject
  loading$:Observable<boolean>=this.loadingSubject.asObservable();
  //we use this function to track whether loader should be displayed or not
  showLoaderUntilCompleted<T>(obs$:Observable<T>):Observable<T>{
    //create a default observable with initial value to start
    return of(null).pipe(  
        // we turn the loading indicator on   
        tap(()=>this.loadingOn()),
        // we switch to the input observable using concatMap
        concatMap(()=>obs$),
        // we turn off the loading indicator once observable is over
        finalize(()=>this.loadingOff())
    )
  }
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
