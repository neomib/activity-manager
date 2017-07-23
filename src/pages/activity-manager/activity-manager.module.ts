import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityManager } from './activity-manager';
import {ActivityListModule} from'../activity-list/activity-list.module';
import {ActivityEditorModule} from'../activity-editor/activity-editor.module';

@NgModule({
  declarations: [
    ActivityManager
  ],
  imports: [
    ActivityListModule,
    ActivityEditorModule,
    IonicPageModule.forChild(ActivityManager)
  ],
  exports: [
    ActivityManager
  ]
})
export class ActivityManagerModule {}
