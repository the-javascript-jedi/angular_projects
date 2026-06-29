import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UsernameAvailableValidator } from './userNameAvailableValidator';
import { finalize, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
// import { usernameAvailableValidator } from './userNameAvailableValidator';

@Component({
  selector: 'app-ladder-three',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ladder-three.html',
  styleUrl: './ladder-three.scss',
})
export class LadderThree {
  private fb = inject(FormBuilder);
  private userNameValidator = inject(UsernameAvailableValidator);
  isCheckingUsername = false;

  constructor() {
    this.form.get('username')?.setAsyncValidators(
      this.trackLoading((control) => this.userNameValidator.validate(control)),
      // this.trackLoading(this.userNameValidator.validate.bind(this.userNameValidator)),
    );
    this.form.get('username')?.updateValueAndValidity();
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
  });

  get username() {
    return this.form.get('username');
  }

  // wraps the validator to toggle the loading flag
  private trackLoading(validator: AsyncValidatorFn): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      this.isCheckingUsername = true;
      return (validator(control) as Observable<ValidationErrors | null>).pipe(
        finalize(() => (this.isCheckingUsername = false)),
      );
    };
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('this.form.value', this.form.value);
    }
  }
}
