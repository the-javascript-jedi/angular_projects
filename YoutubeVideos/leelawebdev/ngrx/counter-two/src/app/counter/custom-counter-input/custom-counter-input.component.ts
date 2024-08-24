import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  constructor(private store:Store<{counter:CounterState}>) { }
  number:number=0;
  ngOnInit(): void {
  }

  onAdd(){
    console.log(this.number);
    this.store.dispatch(customIncrement({value:this.number}));
  }
}
