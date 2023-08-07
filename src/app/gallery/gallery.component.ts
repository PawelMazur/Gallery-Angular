import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit{

  slideIndex = 1;
  img: string = "";

  @Input() product!: Product;

  @ViewChildren("thumnbails")
  thumnbails!: QueryList<ElementRef>

  @ViewChild("caption")
  caption!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.slideIndex = 1;
    this.showSlides(0);
  }

  plusSlides(number: number){
    this.showSlides(number);
  }

  currentSilde(number: number){
    this.showSlides(number);
  }

  showSlides(number: number){
    this.thumnbails.toArray()[this.slideIndex].nativeElement.classList.remove("active");
    this.slideIndex += number;
    if (this.slideIndex > this.thumnbails.length - 1) {this.slideIndex = 0}
    else if (this.slideIndex < 1) {this.slideIndex = this.thumnbails.length - 1}

    var prev: any = document.getElementById("preview");
    this.thumnbails.toArray()[this.slideIndex].nativeElement.classList.add("active");
    prev.src = this.thumnbails.toArray()[this.slideIndex].nativeElement.src
  }

  setImage(index: number){
    var prev: any = document.getElementById("preview");
    this.thumnbails.toArray()[this.slideIndex].nativeElement.classList.remove("active");
    this.slideIndex = index;
    this.thumnbails.toArray()[this.slideIndex].nativeElement.classList.add("active");
    prev.src = this.thumnbails.toArray()[this.slideIndex].nativeElement.src;
    
  }
}
