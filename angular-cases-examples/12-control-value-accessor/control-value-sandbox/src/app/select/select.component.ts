import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from '../control-value-accessor.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
   providers:[
    {
      // overide the provider we have for control value accessor
      provide:NG_VALUE_ACCESSOR,
      // forward ref whatever comes from NG_VALUE_ACCESSOR to InputComponent
      useExisting:forwardRef(()=>SelectComponent),
      multi:true
    }
  ]
})
export class SelectComponent<T> extends ControlValueAccessorDirective<T>{
  @Input() options:T[]=[];
  @Input() selectId="";
  @Input() selectLabel="";
  @Input() selectErrorMessaage="";
  @Input() label="";
  @Input() customErrorMessages:Record<string,string>={}

}
