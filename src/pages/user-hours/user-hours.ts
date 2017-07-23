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
  currentDate:string;
  constructor(public navCtrl: NavController, private appService: AppService)
  {
    this.appService.reportListObsr.subscribe(list =>
    {
      this.hoursList = list;
    });
    this.currentDate=this.appService.getCurrentTime().dateFormated;
  }
  endReport(report)
  {
    this.appService.endActREport(report);
    report.isActive = false;
  }
  startReport(report)
  {
    this.appService.startActReport(report);
  }
  loadData()
  {
    this.appService.getActivities()
      .then(() => this.appService.getTodaysReports())
      .catch(() => { });
  }

}
