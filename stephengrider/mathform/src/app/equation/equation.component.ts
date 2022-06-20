import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {delay,filter} from 'rxjs/operators';
import { MathValidators } from '../math-validators';
@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPerSolution=0;
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
    const startTime=new Date();
    let numberSolved=0;
    // statusChanges is an observable will return a subject so we can subscribe to the changes for form validity
    console.log("this.mathForm.statusChanges",this.mathForm.statusChanges);
    // use filter operator in pipe and remove messages that we don't need
    this.mathForm.statusChanges.pipe(
      filter(value=>value==="VALID"),
      delay(100)).subscribe(value=>{
      numberSolved++;
      console.log("value",value);
      this.secondsPerSolution=(new Date().getTime()-startTime.getTime())/numberSolved/1000;
      /*alternate appraoch to filter in rxjs*/
      // do not reset the form if invalid
      // we are doing this check in the filter pipe
      // if(value==="INVALID"){
      //   return;
      // }
      // generate a new random number if the form is valid
      // individual form insert
      // this.mathForm.controls['a'].setValue(this.randomNumber());
      // this.mathForm.controls['b'].setValue(this.randomNumber());
      // // clear the form field
      // this.mathForm.controls['answer'].setValue('');
      /*alternate appraoch */
      // group form insert - 
      this.mathForm.setValue({
        a:this.randomNumber(),
        b:this.randomNumber(),
        answer:'',
      })
      // we can use patch value and update only necessary values
      // this.mathForm.setValue({
    })
    // value changes will return an observable everytime form value is changed
  }
  randomNumber(){
    return Math.floor(Math.random()*10);
  }
}
