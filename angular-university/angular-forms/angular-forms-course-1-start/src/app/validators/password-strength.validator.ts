import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordStrengthValidator():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        const value=control.value;
        // if no value there are no errors
        if(!value){
            return null;
        }
        // check if password has uppercase values
        const hasUpperCase=/[A-Z]+/.test(value);
        // Check for lower case
        const hasLowerCase=/[a-z]+/.test(value);
        // check for numeric
        const hasNumeric=/[0-9]+/.test(value);
        // check validity for uppercase lowercase and numeric characters
        const passwordValid=hasUpperCase&&hasLowerCase&&hasNumeric;
        // if we have errors return an errors object
        return !passwordValid?{passwordStrength:true}:null;
    }
}