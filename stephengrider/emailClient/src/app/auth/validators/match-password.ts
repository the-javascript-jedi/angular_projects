import { AbstractControl, FormGroup, Validator } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class MatchPassword implements Validator {
    validate(formGroup:FormGroup) {
        const {password,passwordConfirmation}=formGroup.value;
        if(password===passwordConfirmation){
            return null;
        }else{
            // return custom error
            return {passwordsDontMatch:true}
        }
    }
}
