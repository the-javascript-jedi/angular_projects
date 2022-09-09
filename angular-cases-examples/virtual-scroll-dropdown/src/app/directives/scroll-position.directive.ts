import { Directive,HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrollPosition]',
   host: {'scroll': 'track($event)'}
})
export class ScrollPositionDirective {

  constructor() { }
@HostBinding()
  track($event: Event) {
        console.debug("Scroll Event Directive", $event);
    }

}
