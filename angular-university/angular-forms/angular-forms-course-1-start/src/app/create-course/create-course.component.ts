import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  // to show error message in stepper component
  providers:[
    {
      provide:STEPPER_GLOBAL_OPTIONS,useValue:{showError:true}
    }
  ]
})
export class CreateCourseComponent implements OnInit {
  ngOnInit() { }

  submit(step1,step2,step3){
    console.log("submit clicked -step1",step1);
    console.log("submit clicked -step2",step2);
    console.log("submit clicked -step3",step3);
  }
}