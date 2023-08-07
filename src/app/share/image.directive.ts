import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  imageChange(){
    var src = this.el.nativeElement.src;
    this.el.nativeElement.classList.add("active");
    var prev: any = document.getElementById("preview");
    prev.src = src;

  }

}
