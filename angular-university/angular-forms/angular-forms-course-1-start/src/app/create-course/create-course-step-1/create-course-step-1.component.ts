import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../../services/courses.service';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import { courseTitleValidator } from '../../validators/course-title.validator';

interface CourseCategory{
  code:string;
  description:string;
}

@Component({
  selector: 'create-course-step-1',
  templateUrl: './create-course-step-1.component.html',
  styleUrls: ['./create-course-step-1.component.scss']
})
export class CreateCourseStep1Component implements OnInit {
  form=this.fb.group({
    title:['',{
      validators:[Validators.required,Validators.minLength(5),Validators.maxLength(60)],
      asyncValidators:[courseTitleValidator(this.courses)],
      // make api request only on blur
      updateOn:'blur'
    }],
    releaseDateAt:[new Date(),{
      validators:[Validators.required]
    }],
    category:[
      'BEGINNER',{
        validators:[
           Validators.required
        ]
      }
    ],
    // Validators.requiredTrue will make sure the checkbox validation is true
    downloadsAllowed:[false,Validators.requiredTrue],
    longDescription:['',{
      validators:[
        Validators.required,Validators.minLength(3)
      ]
    }]
  })
  // course category type
  courseCategories$:Observable<CourseCategory[]>;

  constructor(private fb:FormBuilder,private courses:CoursesService){  }
  ngOnInit() {
    this.courseCategories$=this.courses.findCourseCategories();
  }
  // getter for course title
  get courseTitle(){
    return this.form.controls['title'];
  }
}