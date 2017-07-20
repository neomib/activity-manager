import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityManager } from './activity-manager';
import {ActivityList} from'../activity-list/activity-list';
import {ActivityEditor} from'../activity-editor/activity-editor';
import {MdInputModule} from '@angular/material';

@NgModule({
  declarations: [
    ActivityManager,
    ActivityList,
    ActivityEditor
  ],
  imports: [
    MdInputModule,
    IonicPageModule.forChild(ActivityManager),
  ],
  exports: [
    ActivityManager
  ]
})
export class ActivityManagerModule {}
