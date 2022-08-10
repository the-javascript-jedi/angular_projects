import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/password-strength.validator";

@Directive({
    selector:"[passwordStrength]",
    // register the directive as a form field directive
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:PasswordStrengthDirective,
        multi:true
    }]
})
export class PasswordStrengthDirective implements Validator{
    validate(control:AbstractControl):ValidationErrors|null{
        // create validation function then call the validation function to get the vbalidation result
        return createPasswordStrengthValidator()(control);
    }
}