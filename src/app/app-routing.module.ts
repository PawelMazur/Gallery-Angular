import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGalleryComponent } from './page/product-gallery/product-gallery.component';

const routes: Routes = [
  {
    path:"",
    component: ProductGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
