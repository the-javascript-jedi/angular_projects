import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from '../control-value-accessor.directive';

type InputType="text"|"number"|"email"|"password";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    {
      // overide the provider we have for control value accessor
      provide:NG_VALUE_ACCESSOR,
      // forward ref whatever comes from NG_VALUE_ACCESSOR to InputComponent
      useExisting:forwardRef(()=>InputComponent),
      multi:true
    }
  ]
})
// we don't know if form control is type string | type number
export class InputComponent<T> extends ControlValueAccessorDirective<T> {
  
@Input() inputId="";
@Input() label="";
@Input() type:InputType="text";
@Input() customErrorMessages:Record<string,string>={}

}
