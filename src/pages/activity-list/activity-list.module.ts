import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityList } from './activity-list';
import {ActivityOptionsModule} from '../../components/activity-options/activity-options.module';

@NgModule({
  declarations: [
    ActivityList,
  ],
  imports: [
    ActivityOptionsModule,
    IonicPageModule.forChild(ActivityList)    
  ],
  exports: [
    ActivityList
  ]
})
export class ActivityListModule {}
