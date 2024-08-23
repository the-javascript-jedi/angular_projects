import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter$:Observable<{counter:number}>
  // constructor(private store:Store<{counter:{counter:number}}>) { }
  constructor(private store:Store<{counter:CounterState}>) { }

  counter:number;
  ngOnInit(): void {
    // referring the variable from an observable
    this.store.select('counter').subscribe((data)=>{
      this.counter=data.counter
    })

    // directly referring the observable
    this.counter$=this.store.select('counter')
  }
}
