import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { AppService } from '../../providers/app-service';

/**
 * Generated class for the HoursReport component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@IonicPage({})
@Component({
  selector: 'hours-report',
  templateUrl: 'hours-report.html'
})
export class HoursReport
{
  activity;
  actTitle: string;
  mydate: Date;
  hours: number;
  @ViewChild('dateField') dateField;
  @ViewChild('hoursField') hoursField;

  constructor(private navParams: NavParams, public viewCtrl: ViewController, private appService: AppService)
  {
    this.mydate = new Date();
    this.activity = this.navParams.data.activity;
    this.actTitle = this.activity.DETAILS;

  }
  ngOnInit()
  {
    this.dateField.showCalendar = true;
    this.dateField.dateChange.subscribe(date =>
    {
      this.mydate = date
    });
    setTimeout(() =>
    {
      this.hoursField.setFocus();
    }, 500);
  }
  dismiss()
  {
    this.viewCtrl.dismiss();
  }
  ionViewWillLeave()
  {
    if (!this.hours)
      return;
    this.mydate.setHours(11);
    this.appService.newActReport(this.activity.TODOREF, this.activity.PROJDOCNO, this.mydate.toISOString(), this.hours);
  }

}
