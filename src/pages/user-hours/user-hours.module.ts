import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserHours } from './user-hours';
import { ActivityEditorModule } from "../activity-editor/activity-editor.module";
import { StickyNotesModule } from "../../components/sticky-notes/sticky-notes.module";
import { HoursReportModule } from '../../components/hours-report/hours-report.module';

@NgModule({
  declarations: [
    UserHours,
  ],
  imports: [
    HoursReportModule,
    ActivityEditorModule,
    StickyNotesModule,
    IonicPageModule.forChild(UserHours),
  ],
  exports: [
    UserHours
  ],
  
})
export class UserHoursModule {}
