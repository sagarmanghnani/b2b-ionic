import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectBidPage } from './select-bid';

@NgModule({
  declarations: [
    SelectBidPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectBidPage),
  ],
  exports: [
    SelectBidPage
  ]
})
export class SelectBidPageModule {}
