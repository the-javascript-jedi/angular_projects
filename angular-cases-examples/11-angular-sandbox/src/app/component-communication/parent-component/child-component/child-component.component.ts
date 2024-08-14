// ng generate component component-communication/parent-component/child-component
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {
  @Input() nameDataInput="";
  @Output() outputEvent=new EventEmitter();

  childData="test"

  ngOnInit(){
    console.log("nameDataInput",this.nameDataInput)
  }

  submitData(){
    this.outputEvent.emit(this.childData)
  }
}
