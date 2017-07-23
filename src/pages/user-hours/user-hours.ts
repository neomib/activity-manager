import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { } from 'priority-ionic';
import { AppService } from '../../providers/app-service';

/**
 * Generated class for the UserHours page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'user-hours',
  templateUrl: 'user-hours.html',
})
export class UserHours 
{
  hoursList: any[];
  constructor(public navCtrl: NavController, private appService: AppService)
  {
    this.appService.reportListObsr.subscribe(list =>
    {
      this.hoursList = list;
    });
  }
  endReport(report)
  {
    this.appService.endActREport(report);
  }
  startReport(report)
  {
    
  }


}
