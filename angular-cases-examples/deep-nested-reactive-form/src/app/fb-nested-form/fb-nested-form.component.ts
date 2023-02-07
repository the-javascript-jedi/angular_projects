import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// JS Data Extraction
let module = require('../../data/dummyData.js');
// TS Data Extraction
import {dataFromApiTS} from "../../data/dummyData"

@Component({
  selector: 'app-fb-nested-form',
  templateUrl: './fb-nested-form.component.html',
  styleUrls: ['./fb-nested-form.component.scss']
})
export class FbNestedFormComponent implements OnInit {
  survey: FormGroup;
  loadedSurvey: FormGroup;
  submitted:boolean=false;
  dataFromAPIS=[];
  constructor(private fb: FormBuilder) {
  }

//If you want to via formbuilder way just use this file instead of app.component.ts replace the contents

  ngOnInit() {
    // exported array as JS
    let arrayFromJS = module.dataFromApiJS;
    console.log("arrayFromJS",arrayFromJS);
    // exported array as TS
    let arrayFromTS=dataFromApiTS;
    console.log("arrayFromTS",arrayFromTS);
    // load data from apis
    this.dataFromAPIS=arrayFromTS.sections;

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

<<<<<<< HEAD
  removeQuestion(j){
    console.log("removeQuestion-j",j)
    console.log("this.survey.get('sections')",this.survey.get('sections')['controls'][0].get('questions')['controls'])
    console.log("this.survey.get('sections')",this.survey.get('sections')['controls'][0].get('questions')['controls'][j])
    //  const control = <FormArray>this.survey.get('sections')['controls'][j].get('questions');
     const control = <FormArray>this.survey.get('sections')['controls'][0].get('questions')['controls'];
     console.log("control",control)
     control.removeAt(j);
=======
  removeQuestion(i,j){
    const control = <FormArray>this.survey.get('sections')['controls'][i].get('questions');
    control.removeAt(j);
>>>>>>> 2ba094e88b4c3f291b170edf1d2f8bd3120d93e2
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
  loadData(){
    console.log('load data called');
    let data=this.dataFromAPIS;
    console.log("data",data)
    this.survey=this.fb.group({
      sections:this.fb.array(
        data.map((val,index)=>{
          return this.fb.group({
            sectionTitle:[val.sectionTitle,{
              validators:[Validators.required]
            }],
              sectionDescription: [val.sectionDescription,{
               validators:[Validators.required]
            }],
            questions:this.fb.array(
              val.questions.map((question,index)=>{
                return(
                  this.fb.group({
                      questionTitle:[question.questionTitle,{
                         validators:[Validators.required]
                      }],
                      questionType:[question.questionType,{
                         validators:[Validators.required]
                      }]
                  })
                )
              })
            )
          })
        })
      )
    })
  }
}