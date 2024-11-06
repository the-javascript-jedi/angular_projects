import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import { Store } from '@ngrx/store'
import { register } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting } from '../../store/selectors';
import { AuthStateInterface } from '../../types/authState.interface';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb: FormBuilder,private store:Store<{auth:AuthStateInterface}>,private authService:AuthService) {}

  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request:RegisterRequestInterface={
      user:this.form.getRawValue()
    };
    // dispatch an action
    this.store.dispatch(register({request}))
    // testing the register service
    this.authService.register(request).subscribe((res)=>console.log("res",res))
  }
}
