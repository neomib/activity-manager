import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityManager } from './activity-manager';
import {ActivityList} from'../activity-list/activity-list';
import {ActivityEditor} from'../activity-editor/activity-editor';
import {UserHours} from '../user-hours/user-hours';
import {ActivityOptions} from '../../components/activity-options/activity-options';
// import {MdInputModule} from '@angular/material';

@NgModule({
  declarations: [
    ActivityManager,
    ActivityList,
    ActivityEditor,
    UserHours,
    ActivityOptions
  ],
  imports: [
    // MdInputModule,
    IonicPageModule.forChild(ActivityManager),
  ],
  exports: [
    ActivityManager
  ]
})
export class ActivityManagerModule {}
