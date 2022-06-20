import { Directive,ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map,filter } from 'rxjs';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {

  constructor(private el:ElementRef,private controlName:NgControl) { 
    console.log("this.el",this.el);
  }

  ngOnInit(){
    // accessing the formgroup
    // valueChanges made to form
    this.controlName.control?.parent?.valueChanges.pipe(
      map(({a,b,answer})=>{
      // this will tell us how close user is to the answer
      return Math.abs((a+b-answer)/(a+b));
    })).subscribe(value=>{
      if(value<0.2){
        this.el.nativeElement.classList.add("close");
      }else{
        this.el.nativeElement.classList.remove("close");
      }
    });
  }
}
