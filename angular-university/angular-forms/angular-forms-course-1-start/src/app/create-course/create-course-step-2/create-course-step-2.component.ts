import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { createPromoRangeValidator } from '../../validators/date-range.validator';

@Component({
  selector: 'create-course-step-2',
  templateUrl: 'create-course-step-2.component.html',
  styleUrls: ['create-course-step-2.component.scss']
})

export class CreateCourseStep2Component implements OnInit {
  form=this.fb.group({
    courseType:['premium',Validators.required],
    price:[null,[
        Validators.required,
        Validators.min(1),
        Validators.max(9999),
        Validators.pattern("[0-9]+")
    ]],
    promoStartAt:[null],
    promoEndAt:[null]
  },{
    // config objet
    validators:[createPromoRangeValidator()],
    updateOn:'blur'
  })
  ngOnInit() { 
    // whenever the form changes any value this observable is updated
    this.form.valueChanges.subscribe(val=>{
      const priceControl=this.form.controls["price"];
      // disable the price contol form field
      if(val.courseType=='free'&&priceControl.enabled){
        // if emitEvent is not kept as false there is a possibility of infinite loop
        priceControl.disable({emitEvent:false});
      }
      else if(val.courseType=='premium'&&priceControl.disabled){
        // if emitEvent is not kept as false there is a possibility of infinite loop
        priceControl.enable({emitEvent:false});
      }
    })
   }

  constructor(private fb:FormBuilder,private courses:CoursesService){  }
}
