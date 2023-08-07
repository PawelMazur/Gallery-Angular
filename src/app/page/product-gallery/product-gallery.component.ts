import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProductGallery().subscribe(
      product => this.product = product
    );
  }

}
