import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getChannelName, getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter:number;
  channelName:string;
  // constructor(private store:Store<{counter:{counter:number}}>) { }
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    // referring the variable from an observable
    this.store.select(getCounter).subscribe((counter)=>{
      this.counter=counter;
    })

    
    // this.store.select('counter').subscribe(val=>this.channelName=val.channelName);
    this.store.select(getChannelName).subscribe((channel)=>{      
      this.channelName=channel;
    })
  }
}
