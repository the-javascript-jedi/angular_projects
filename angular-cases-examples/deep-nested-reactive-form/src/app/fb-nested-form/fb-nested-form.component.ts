import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-fb-nested-form',
  templateUrl: './fb-nested-form.component.html',
  styleUrls: ['./fb-nested-form.component.scss']
})
export class FbNestedFormComponent implements OnInit {
  survey: FormGroup;
  submitted:boolean=false;
  constructor(private fb: FormBuilder) {

  }

//If you want to via formbuilder way just use this file instead of app.component.ts replace the contents

  ngOnInit() {


    this.survey = this.fb.group({
      sections: this.fb.array([
        this.initSection(),
      ]),
    });
  }

  initSection() {
    return this.fb.group({
      sectionTitle: ['',{
        validators:[Validators.required]
      }],
      sectionDescription: ['',{
        validators:[Validators.required]
      }],
      questions: this.fb.array([
        this.initQuestion()
        ])
    });
  }
  initQuestion() {
    return this.fb.group({
      questionTitle: ['',{
        validators:[Validators.required]
      }],
      questionType: ['',{
        validators:[Validators.required]
      }],
    });
  }

  initOptions() {
    return this.fb.group({
      optionTitle: ['']
    });
  }

  addSection() {
    const control = <FormArray>this.survey.get('sections');
    control.push(this.initSection());
  }

  addQuestion(j) {
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

  removeOption(i,j){
   const control = <FormArray>this.survey.get(['sections',i,'questions',j,'options']); // also try this new syntax
   control.removeAt(i);

  }

  onSubmit(form){
    this.submitted = true;
    console.log("form--onSubmit",form);
  }

}