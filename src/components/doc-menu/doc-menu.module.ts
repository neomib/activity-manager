import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DocMenu } from './doc-menu';

@NgModule({
  declarations: [
    DocMenu,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DocMenu
  ]
})
export class DocMenuModule {}
