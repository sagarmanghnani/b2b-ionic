import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotpassPage } from './forgotpass';

@NgModule({
  declarations: [
    ForgotpassPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotpassPage),
  ],
  exports: [
    ForgotpassPage
  ]
})
export class ForgotpassPageModule {}
