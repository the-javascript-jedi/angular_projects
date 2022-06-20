import { Directive,ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {

  constructor(private el:ElementRef,private controlName:NgControl) { 
    console.log("this.el",this.el);
  }

  ngOnInit(){
    // accessing the formgroup
    console.log("this.controlName",this.controlName.control?.parent);
  }
}
