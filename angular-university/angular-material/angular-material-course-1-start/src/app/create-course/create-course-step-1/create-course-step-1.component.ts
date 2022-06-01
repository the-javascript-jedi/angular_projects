import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
const SAMPLE_TEXT="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium harum accusamus commodi mollitia earum architecto voluptatum enim, omnis quidem eligendi.";
@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {
  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990,0,1), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SAMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder) { }
  get courseTitle() {
    return this.form.controls['title'];
  }
}