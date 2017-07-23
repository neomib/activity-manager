import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../providers/app-service';

/**
 * Generated class for the Main page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main
{

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService)
  {
  }

  ionViewDidLoad()
  {
    this.loadData();
  }
  loadData()
  {
    this.appService.getActivities()
      .then(() => this.appService.getTodaysReports())
      .catch(() => { });
  }

}
