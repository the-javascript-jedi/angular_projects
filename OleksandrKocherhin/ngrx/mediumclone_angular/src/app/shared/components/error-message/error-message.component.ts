import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone:true,
  template:'<div>{{message}}</div>'
})
export class ErrorMessageComponent {
  @Input() message:string='Something went wrong';
}
