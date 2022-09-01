import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'create-course-step-3',
  templateUrl: 'create-course-step-3.component.html',
  styleUrls: ['create-course-step-3.component.scss']
})
export class CreateCourseStep3Component {
  form=this.fb.group({
    // formarray - when we want or remove formcontrols dynamically
    lessons:this.fb.array([])
  })
  //this.lessons – getter for lessons
  get lessons(){
    return this.form.controls["lessons"] as FormArray;
  }
  addLesson(){
    // define a form group to be added to the form array
    const lessonForm=this.fb.group({
      title:['',Validators.required],
      level:['beginner',Validators.required],
    })
    // push the created form group to the form array
    this.lessons.push(lessonForm);
  }
  // deleteLesson
  deleteLesson(lessonIndex:number){
    this.lessons.removeAt(lessonIndex);
  }
  constructor(private fb:FormBuilder){

  }
}