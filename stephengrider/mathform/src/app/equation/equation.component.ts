import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,AbstractControl } from '@angular/forms';

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
    (form:AbstractControl)=>{
      console.log("form.value",form.value);
      const {a,b,answer}=form.value;
      // check if the added values return the answer or use abstract form control and display a custom error
      if(a+b===parseInt(answer)){
        return null;
      }else{
        return {addition:true}
      }
    }
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
  }
  randomNumber(){
    return Math.floor(Math.random()*10);
  }
}
