import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';

import { PriorityIonicModule } from 'priority-ionic';
import { AppService } from '../providers/app-service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
     MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PriorityIonicModule,
     IonicStorageModule.forRoot(),
     BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppService
  ]
})
export class AppModule {}
