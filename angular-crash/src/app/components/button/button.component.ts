import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:string="";
  @Input() color:string="";
  // Step 2 Declare an Event Emitter as an Output
  @Output() btnClick=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Step 3 - Specify the Emit function 
  fnButtonOnClick=()=>{
    console.log("Button-Clicked Add Button");
    this.btnClick.emit();
  }
}
