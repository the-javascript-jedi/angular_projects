import { Directive,ElementRef,Renderer2,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string = 'yellow';
  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){    
    this.highlight(this.highlightColor);
  }

   @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color:string|null){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color);
  }
}
