import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityManager } from './activity-manager';
import {ActivityListModule} from'../activity-list/activity-list.module';


@NgModule({
  declarations: [
    ActivityManager
  ],
  imports: [
    ActivityListModule,
    IonicPageModule.forChild(ActivityManager)
  ],
  exports: [
    ActivityManager
  ]
})
export class ActivityManagerModule {}
