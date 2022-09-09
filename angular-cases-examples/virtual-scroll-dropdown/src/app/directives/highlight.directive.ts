import { Directive,HostBinding } from '@angular/core';
@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  constructor() { 
console.log("Directive created");
}
@HostBinding('className')
  get cssClasses(){
    return "highlighted"
  }

}
