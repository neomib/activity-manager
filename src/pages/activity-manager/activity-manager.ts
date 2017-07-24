import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';

/**
 * Generated class for the ActivityManager page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'activity-manager',
  templateUrl: 'activity-manager.html',
})
export class ActivityManager
{

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService)
  {
  }
  loadData()
  {
    this.appService.getActivities()
      .then(() => this.appService.getTodaysReports())
      .catch(() => { });
  }


}
