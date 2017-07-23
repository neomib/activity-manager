import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserHours } from './user-hours';

@NgModule({
  declarations: [
    UserHours,
  ],
  imports: [
    IonicPageModule.forChild(UserHours),
  ],
  exports: [
    UserHours
  ]
})
export class UserHoursModule {}
