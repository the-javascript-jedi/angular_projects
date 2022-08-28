import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder, FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  Validators
} from '@angular/forms';
import {noop, Subscription} from 'rxjs';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers:[
   {
     provide:NG_VALUE_ACCESSOR,
     multi:true,
     useExisting:AddressFormComponent
   }
  ]
})
export class AddressFormComponent implements ControlValueAccessor,OnDestroy{
    @Input()
    legend:string;
    // when user interacts with one field whole form is considered as touched
    onTouched=()=>{}
    onChangeSub:Subscription;

    form: FormGroup = this.fb.group({
        addressLine1: [null, [Validators.required]],
        addressLine2: [null, [Validators.required]],
        zipCode: [null, [Validators.required]],
        city: [null, [Validators.required]]
    });

    constructor(private fb: FormBuilder) {
    }
    // whenever form value changes we need to report that change to parent form using onChange callback
    // whenever this.form.valueChanges emits a new change
    registerOnChange(onChange: any){
      this.onChangeSub=this.form.valueChanges.subscribe(onChange);
    }
    ngOnDestroy(){
      this.onChangeSub.unsubscribe();
    }
    // write value to child component
    writeValue(value: any) {
        if(value){
          this.form.setValue(value);
        }
    }
    // register a ontouched callback
    registerOnTouched(onTouched: any): void {
      this.onTouched=onTouched;
    }
    // receives input and decides if control should be enabled or disabled
    setDisabledState(disabled: boolean){
        if(disabled){
          this.form.disable();
        }else{
          this.form.enable();
        }
    }
}



