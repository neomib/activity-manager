import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { MessageHandler } from 'priority-ionic';

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

  currentDate: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService, private messageHandler: MessageHandler)
  {
    this.currentDate = this.appService.getCurrentTime().dateFormated;
    this.appService.loadDataObsr.subscribe(() =>
    {
      this.currentDate = this.appService.getCurrentTime().dateFormated;
    });
  }

  ionViewWillLoad()
  {
    if (!this.appService.getUserName())
      this.navCtrl.setRoot('Login');
  }
  ionViewDidLoad()
  {
    // this.loadData();
  }
  loadData()
  {
    this.messageHandler.showTransLoading();
    this.appService.loadData();
  }

}
