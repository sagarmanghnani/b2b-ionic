import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequirementDetailsPage } from './requirement-details';

@NgModule({
  declarations: [
    RequirementDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RequirementDetailsPage),
  ],
  exports: [
    RequirementDetailsPage
  ]
})
export class RequirementDetailsPageModule {}
