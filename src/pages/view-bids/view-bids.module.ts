import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBidsPage } from './view-bids';

@NgModule({
  declarations: [
    ViewBidsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBidsPage),
  ],
  exports: [
    ViewBidsPage
  ]
})
export class ViewBidsPageModule {}
