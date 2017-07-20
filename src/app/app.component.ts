import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessageHandler, Constants } from 'priority-ionic';
import { AppService } from "../providers/app-service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp
{
  rootPage: string = "Login";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private messageHandler: MessageHandler, private appServie: AppService)
  {
    platform.ready().then(() =>
    {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    Constants.setRtlTranslations();
    platform.setDir("rtl", true);
    window['priorityReady'] = this.priorityready;
  }
  priorityready = () =>
  {
    this.messageHandler.showTransLoading('hide');
    // if (!this.appServie.isLogInDataStored())
    // {
    this.rootPage = "Login";
    this.messageHandler.hideLoading();
    // }
    // else
    // {
    //   this.appServie.login().then(
    //     () =>
    //     {
    //       this.rootPage = ActiveTask;
    //       this.messageHandler.hideLoading();
    //     },
    //     reason =>
    //     {
    //       this.rootPage = LoginPage;
    //       this.messageHandler.hideLoading();
    //     });

    // }
  }
  logout()
  {
    this.appServie.clearLogInData();
    // this.nav.setRoot(LoginPage);
  }
}
