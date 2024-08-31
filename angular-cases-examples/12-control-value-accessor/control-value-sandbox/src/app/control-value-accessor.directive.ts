// ng g directive control-value-accessor
import { Directive, Component, forwardRef, Inject, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, Validators } from '@angular/forms';
import { distinctUntilChanged, startWith, Subject, takeUntil, tap } from 'rxjs';

@Directive({
  selector: '[appControlValueAccessor]'
})
export class ControlValueAccessorDirective<T> implements ControlValueAccessor,OnInit  {

  control:FormControl|undefined;
  isRequired=false;

  private _isDisabled=false;
  private _destroy$=new Subject<void>();
  private _onTouched!:()=>T;

  // makes it possible to recieve value
  constructor(@Inject(Injector) private injector:Injector) { }

  ngOnInit(): void {
    this.setFormControl();
    this.isRequired=this.control?.hasValidator(Validators.required) ?? false;
  }

  setFormControl(){
    try{
      const formControl=this.injector.get(NgControl);
      switch(formControl.constructor){
        // if we are passing value as formControlName
        case FormControlName:
          this.control=this.injector
                        .get(FormGroupDirective)
                        .getControl(formControl as FormControlName);
          break;
        default:
        // if we are passing as [formControl]
          this.control=(formControl as FormControlDirective)
                        .form as FormControl;
          break;
      }
    }
    catch(err){
      this.control=new FormControl();
    }
  }

  writeValue(value: T): void {
    // throw new Error('Method not implemented.');
    this.control ? this.control.setValue(value):(this.control=new FormControl(value))
  }
  registerOnChange(fn: (val:T|null)=>T): void {
    this.control?.valueChanges.pipe(
      takeUntil(this._destroy$),
      startWith(this.control.value),
      distinctUntilChanged(),
      tap((val)=>fn(val))
    )
    // when we are typing we can control the type of error
    .subscribe(()=>this.control?.markAsUntouched())
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: ()=>T): void {
    // throw new Error('Method not implemented.');
    this._onTouched=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
    this._isDisabled=isDisabled;
  }


}
