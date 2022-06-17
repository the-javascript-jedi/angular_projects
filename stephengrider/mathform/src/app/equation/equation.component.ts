import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../math-validators';
@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm=new FormGroup({
    a:new FormControl(this.randomNumber()),
    b:new FormControl(this.randomNumber()),
    answer:new FormControl('')
  },[
    // custom validation using abstract form control
    MathValidators.addition('answer','a','b')
  ])
  // alternative to using form control values
  get a(){
    return this.mathForm.value.a;
  }
  get b(){
    return this.mathForm.value.b;
  }
  constructor() { }

  ngOnInit(): void {
    // statusChanges is an observable will return a subject so we can subscribe to the changes for form validity
    console.log("this.mathForm.statusChanges",this.mathForm.statusChanges);
    this.mathForm.statusChanges.subscribe(value=>{
      console.log("value",value);
      // do not reset the form if invalid
      if(value==="INVALID"){
        return;
      }
      // generate a new random number if the form is valid
      // individual form insert
      // this.mathForm.controls['a'].setValue(this.randomNumber());
      // this.mathForm.controls['b'].setValue(this.randomNumber());
      // // clear the form field
      // this.mathForm.controls['answer'].setValue('');
      // group form insert
      this.mathForm.setValue({
        a:this.randomNumber(),
        b:this.randomNumber(),
        answer:'',
      })
      // we can use patch value and update only necessary values
      // this.mathForm.setValue({
    })
  }
  randomNumber(){
    return Math.floor(Math.random()*10);
  }
}
