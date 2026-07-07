import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from './passwordMatchValidator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ladder-two',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ladder-two.html',
  // styleUrl: './ladder-two.scss',
})
export class LadderTwo {
  private fb = inject(FormBuilder);

  form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordMatchValidator },
  );

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
