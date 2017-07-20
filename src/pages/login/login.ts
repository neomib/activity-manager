import { Platform, NavController,IonicPage } from 'ionic-angular';
import { Component, ChangeDetectorRef } from "@angular/core";
import { ConfigurationService, MessageHandler } from 'priority-ionic';
import { AppService } from '../../providers/app-service';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login
{

  usrValue;
  pswValue;
  dirByLang;
  dirOpposite;

  constructor(private nav: NavController,
    private platform: Platform,
    private messageHandler: MessageHandler,
    private appService: AppService,
   // private constants: Strings,
    private changeRef: ChangeDetectorRef)
  {
   // this.dirByLang = this.constants.dirByLang;
   // this.dirOpposite = this.constants.dirOpposite;
  }

  login()
  {
    this.appService.login(this.usrValue, this.pswValue).then(
      res =>
      {
        this.nav.setRoot("ActivityManager");
        this.changeRef.detectChanges();
      },
      reason =>
      {
        this.messageHandler.showToast(reason, 3000);
      }
    ).catch(() => { });
  }
  eventHandler(evnt)
  {
    let key = evnt.key;
    if (key == "Enter")
      this.login();
  }
  leavePage = () =>
  {
    this.platform.exitApp();
  }

}
