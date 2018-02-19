import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { HoursReport } from './hours-report';
import { DatepickerModule } from 'angular2-material-datepicker';

@NgModule({
  declarations: [
    HoursReport,
  ],
  imports: [
    DatepickerModule,
    IonicPageModule.forChild(HoursReport)
  ],
  exports: [
    HoursReport
  ]
})
export class HoursReportModule {}
