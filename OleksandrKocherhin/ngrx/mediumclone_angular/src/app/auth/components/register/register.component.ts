import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import { Store } from '@ngrx/store'
import { register } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting } from '../../store/selectors';
import { AuthStateInterface } from '../../types/authState.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  // get the changed state
  isSubmitting$=this.store.select(selectIsSubmitting)

  constructor(private fb: FormBuilder,private store:Store<{auth:AuthStateInterface}>) {}

  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request:RegisterRequestInterface={
      user:this.form.getRawValue()
    };
    // dispatch an action
    this.store.dispatch(register({request}))
  }
}
