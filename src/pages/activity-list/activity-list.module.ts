import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityList } from './activity-list';
import {ActivityOptionsModule} from '../../components/activity-options/activity-options.module';
import {ActivityEditorModule} from'../activity-editor/activity-editor.module';

@NgModule({
  declarations: [
    ActivityList,
  ],
  imports: [
    ActivityOptionsModule,
    ActivityEditorModule,
    IonicPageModule.forChild(ActivityList)    
  ],
  exports: [
    ActivityList
  ]
})
export class ActivityListModule {}
