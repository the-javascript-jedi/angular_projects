import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ladder-five',
  imports: [ReactiveFormsModule], // required for [formGroup], formControlName, formArrayName, [formGroupName]
  templateUrl: './ladder-five.html',
  // styleUrl: './ladder-five.scss',
})
export class LadderFive {
  private fb = inject(FormBuilder);

  // Top-level FormGroup with two flat controls and one FormArray.
  // Note: pass fb.array() directly — wrapping it in [] would make Angular treat it as a FormControl.
  form = this.fb.group({
    name: ['', Validators.required],
    age: [null, Validators.required],
    experience: this.fb.array([this.createExperience()]), // start with one empty experience row
  });

  // Getter so the template and methods can access the FormArray without repeating form.get().
  // The cast to FormArray is safe because we know the shape of the form above.
  get experience(): FormArray {
    return this.form.get('experience') as FormArray;
  }

  // Factory that builds a single experience FormGroup.
  // Called once on init and again each time the user adds an experience.
  createExperience(): FormGroup {
    return this.fb.group({
      company: ['', Validators.required],
      role: ['', Validators.required],
      years: [null as number | null, [Validators.required, Validators.min(0)]],
    });
  }

  // Appends a fresh, empty experience FormGroup to the end of the FormArray.
  addExperience() {
    this.experience.push(this.createExperience());
  }

  // Removes the FormGroup at the given index from the FormArray.
  removeExperience(index: number) {
    this.experience.removeAt(index);
  }

  onSubmit() {
    // markAllAsTouched() triggers the touched-based error messages in the template for every control.
    // Without this, errors only show on fields the user physically clicked into.
    this.form.markAllAsTouched();
    if (this.form.valid) {
      // age comes back as a string from the input, so we coerce it to a number before using the value.
      const value = { ...this.form.value, age: Number(this.form.value.age) };
      console.log('value', value);
    } else {
      console.log('not valid');
    }
  }
}
