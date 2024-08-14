// ng generate component component-communication/parent-component
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {
  nameData="test";

  submitChildEvent(event){
    console.log("submitChildEvent",event)
  }
}
