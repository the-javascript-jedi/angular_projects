import { Component, Input, OnInit,AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnChanges {
  @Input() errors:Record<string,ValidationErrors>|null={};
  @Input() customErrorMessages:Record<string,string>={};
  @Input() selectErrorMessaage:string="";
  errorMessages:Record<string,string>={
    required:"This field is required",
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("selectErrorMessaage",this.selectErrorMessaage);
    const {customErrorMessages}=changes;
    if(customErrorMessages){
      // put what value we have in front and spread out the new value
      // new value will override the previous ones
      this.errorMessages={
        ...this.errorMessages,
        ...customErrorMessages.currentValue,        
      }
      console.log("this.errorMessages",this.errorMessages)
    }
  }
}
