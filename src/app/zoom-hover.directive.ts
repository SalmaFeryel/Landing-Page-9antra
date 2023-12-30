import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomHover]'
})
export class ZoomHoverDirective {

  constructor(private element:ElementRef,private renderer: Renderer2) 
  { }
  @HostListener('mouseenter')ZoomIn() {
    this.renderer.addClass(this.element.nativeElement,"zoom")
   }
   @HostListener('mouseout')ZoomOut() {
    this.renderer.removeClass(this.element.nativeElement,"zoom")
   }

}



