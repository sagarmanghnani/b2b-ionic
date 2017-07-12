import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostRequestPage } from './post-request';

@NgModule({
  declarations: [
    PostRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PostRequestPage),
  ],
  exports: [
    PostRequestPage
  ]
})
export class PostRequestPageModule {}
