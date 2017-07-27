import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { Subject } from 'rxjs/Subject';

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
  projects: Subject<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService)
  {
    this.projects=this.appService.projectListObsr;
  }
  loadData()
  {
    this.appService.loadData();
  }


}
