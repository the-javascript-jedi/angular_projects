import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneFormatter]'
})
export class PhoneFormatterDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement;
    let cleaned = input.value.replace(/\D+/g, '');

    if (cleaned.length > 10) {
      cleaned = cleaned.substring(0, 10);
    }

    let formatted = '';

    if (cleaned.length > 0) {
      formatted += '(' + cleaned.substring(0, 3) + ') ';
    }
    if (cleaned.length > 3) {
      formatted += cleaned.substring(3, 6) + '-';
    }
    if (cleaned.length > 6) {
      formatted += cleaned.substring(6, 10);
    }

    input.value = formatted;
  }
}
