import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ActivityOptions } from './activity-options';

@NgModule({
  declarations: [
    ActivityOptions,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ActivityOptions
  ]
})
export class ActivityOptionsModule {}
