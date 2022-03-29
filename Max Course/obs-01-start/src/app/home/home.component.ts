import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {map,filter} from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  // create a Subscription data to store and  destroy the observable 
  private firstObservable:Subscription;
  constructor() { }
  ngOnInit() {    
    const customIntervalObservable=Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        // .next()-to emit a new value
        //.error() - throw error
        //.complete() - to tell we are done
          observer.next(count);
          // complete the observable
          if(count===2){
            observer.complete();
          }
          // simulate an error
          if(count>3){
            // throwing an error will cancel the observable, but not comoplete
            observer.error(new Error('Count is greater 3!'));
          }
          count++;
      },1000)
    })
    
    // Call the observale
    this.firstObservable=customIntervalObservable.pipe(filter(data=>{
      // return true if the data should be allowed to pass to next round
      return data>0;
    }),map((data:number)=>{
      // using pipe to transform the observable strwam of data
      return "Round:"+(data+1);
    })).subscribe(data=>{
      console.log("data",data);
    },error=>{
      // handling the error
      console.log("error",error);
      alert(error.message);
    },()=>{
      // handling the completion of the observable
      // this will not fire if observable throws error
      console.log('Completed');
    })
  }
  ngOnDestroy(): void {
    // whenever we leave that component, we clear that subscription and therefore we prevent memory leaks because we're not keeping old subscriptions around.
    this.firstObservable.unsubscribe();
  }
}
