import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabspagePage } from './tabspage';

@NgModule({
  declarations: [
    TabspagePage,
  ],
  imports: [
    IonicPageModule.forChild(TabspagePage),
  ],
  exports: [
    TabspagePage
  ]
})
export class TabspagePageModule {}
