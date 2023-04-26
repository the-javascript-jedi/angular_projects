import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-custom-nested-form',
  templateUrl: './custom-nested-form.component.html',
  styleUrls: ['./custom-nested-form.component.scss']
})
export class CustomNestedFormComponent implements OnInit {
  survey: FormGroup;

  constructor() { }
  submitted:boolean=false;
  ngOnInit(): void {
    this.survey = new FormGroup({
      sections: new FormArray([
        this.initSection(),
      ]),
    });    
  }
  initSection() {
    return new FormGroup({
      sectionTitle: new FormControl('',Validators.required),
      sectionDescription: new FormControl('',Validators.required),
      questions: new FormArray([
        this.initQuestion()
        ])
    });
  }
  initQuestion() {
    return new FormGroup({
      questionTitle: new FormControl('',Validators.required),
      questionType: new FormControl('',Validators.required),      
    });
  }

  initOptions() {
    return new FormGroup({
      optionTitle: new FormControl('')
    });
  }

  addSection() {
    this.submitted=false;
    const control = <FormArray>this.survey.get('sections');
    control.push(this.initSection());
  }

  addQuestion(j) {
    this.submitted=false;
    console.log(j);
    const control = <FormArray>this.survey.get('sections')['controls'][j].get('questions');
   // console.log(control);
    control.push(this.initQuestion());
    
  }

  add(i,j) {
    //console.log(k);
    const control = <FormArray>this.survey.get('sections')['controls'][i].get('questions').controls[j].get('options');

  // const control = <FormArray>this.survey.get(['sections',0,'questions',k,'options']); // also try this new syntax
    //console.log(control);
    control.push(this.initOptions());
  }

  getSections(form) {
    //console.log(form.get('sections').controls);
    return form.controls.sections.controls;
  }
  getQuestions(form) {
   //console.log(form.controls.questions.controls);
    return form.controls.questions.controls;
  }
  getOptions(form) {
    //console.log(form.get('options').controls);
    return form.controls.options.controls;

  }

  removeQuestion(j){
     const control = <FormArray>this.survey.get('sections')['controls'][j].get('questions');
     control.removeAt(j);
  }

  removeSection(i){
   const control = <FormArray>this.survey.get('sections');
   control.removeAt(i);

  }

  removeOption(i,j,k){
    console.log(i,j,k);
   const control = <FormArray>this.survey.get(['sections',i,'questions',j,'options']); // also try this new syntax
   control.removeAt(k);
  }

  remove(i,j){
    const control =  <FormArray>this.survey.get(['sections',i,'questions',j,'options']);
    control.removeAt(0);
    control.controls = [];
  }

  onSubmit(form){
    this.submitted = true;
    console.log("form",form);
    // console.log("form--onSubmit",form.value.sections);
  }
  

}

