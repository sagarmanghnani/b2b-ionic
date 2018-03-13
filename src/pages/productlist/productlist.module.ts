import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductlistPage } from './productlist';

@NgModule({
  declarations: [
    ProductlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductlistPage),
  ],
  exports: [
    ProductlistPage
  ]
})
export class ProductlistPageModule {}
