import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowRequestPage } from './show-request';

@NgModule({
  declarations: [
    ShowRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowRequestPage),
  ],
  exports: [
    ShowRequestPage
  ]
})
export class ShowRequestPageModule {}
