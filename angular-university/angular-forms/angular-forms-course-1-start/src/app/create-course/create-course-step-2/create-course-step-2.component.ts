import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'create-course-step-2',
  templateUrl: 'create-course-step-2.component.html',
  styleUrls: ['create-course-step-2.component.scss']
})

export class CreateCourseStep2Component implements OnInit {
  form=this.fb.group({
    courseType:['premium',Validators.required]
  })
  ngOnInit() {  }

  constructor(private fb:FormBuilder,private courses:CoursesService){  }
}
