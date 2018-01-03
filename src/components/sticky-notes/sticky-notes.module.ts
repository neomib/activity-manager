import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { StickyNotes } from "./sticky-notes";


@NgModule({
  declarations: [
    StickyNotes,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    StickyNotes
  ]
})
export class StickyNotesModule {}
