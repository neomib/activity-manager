import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityEditor } from './activity-editor';


@NgModule({
  declarations: [
    ActivityEditor
  ],
  imports: [
    IonicPageModule.forChild(ActivityEditor)
  ],
  exports: [
    ActivityEditor
  ]
})
export class ActivityEditorModule {}
