import { Directive,HostListener,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickToggle]'
})
export class ClickToggleDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2 ) { }

  @HostListener('click') onMouseClick(){
    this.renderer.setStyle(this.elementRef.nativeElement,'color','green')
  }
}
