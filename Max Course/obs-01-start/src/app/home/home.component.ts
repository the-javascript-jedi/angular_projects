import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
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
    this.firstObservable=interval(1000).subscribe(count=>{
      console.log('count',count);
    })
  }
  ngOnDestroy(): void {
    // whenever we leave that component, we clear that subscription and therefore we prevent memory leaks because we're not keeping old subscriptions around.
    this.firstObservable.unsubscribe();
  }
}
