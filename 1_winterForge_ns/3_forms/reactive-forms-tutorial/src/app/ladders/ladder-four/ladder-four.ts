import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ladder-four',
  imports: [ReactiveFormsModule],
  templateUrl: './ladder-four.html',
  styleUrl: './ladder-four.scss',
})
export class LadderFour {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    skills: this.fb.array([this.fb.control('', Validators.required)]), //start with one skill
  });

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form values', this.form.value);
    }
  }
}
