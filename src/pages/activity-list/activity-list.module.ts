import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityList } from './activity-list';

@NgModule({
  declarations: [
    ActivityList,
  ],
  imports: [
    IonicPageModule.forChild(ActivityList),
  ],
  exports: [
    ActivityList
  ]
})
export class ActivityListModule {}
