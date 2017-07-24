import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Main } from './main';
import { ActivityManagerModule } from '../activity-manager/activity-manager.module';
import { UserHoursModule } from '../user-hours/user-hours.module';
import { DocMenuModule } from '../../components/doc-menu/doc-menu.module';


@NgModule({
  declarations: [
    Main,
  ],
  imports: [
    ActivityManagerModule,
    UserHoursModule,
    DocMenuModule,
    IonicPageModule.forChild(Main)
  ],
  exports: [
    Main
  ]
})
export class MainModule { }
