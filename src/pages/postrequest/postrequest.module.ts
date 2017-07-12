import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostrequestPage } from './postrequest';

@NgModule({
  declarations: [
    PostrequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PostrequestPage),
  ],
  exports: [
    PostrequestPage
  ]
})
export class PostrequestPageModule {}
