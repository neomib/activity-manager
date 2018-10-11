import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
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
export class UserHours implements OnInit
{
  hoursList: any[];
  myTasks: any[];
  iterationItems:any[];
  isShowSpinner: boolean;
  isShowRepSpinner: boolean;
  isShowTodayReports: boolean;

  isLoadDataStarted: boolean;
  isLoadReportsFinished: boolean;
  isLoadTasksFinished: boolean;

  selectedSegment;

  constructor(public navCtrl: NavController, private appService: AppService, public popoverCtrl: PopoverController)
  {
    this.selectedSegment = "todayReports";
    this.isShowSpinner = true;
    this.isShowTodayReports = true;
    this.myTasks = [];
    this.hoursList = [];
    this.isLoadDataStarted = false;
    this.appService.loadDataObsr.subscribe(() =>
    {
      this.isShowSpinner = true;
      this.isLoadDataStarted = true;
      this.isLoadReportsFinished = false;
      this.isLoadTasksFinished = false;
    });
    this.appService.reportListObsr.subscribe(list =>
    {
      this.hoursList = list;
      this.isShowRepSpinner = false;
      this.isLoadReportsFinished = true;
    });
    this.appService.todoListObsr.subscribe(list =>
    {
      this.myTasks = this.appService.filterActivities(list);
      this.isLoadDataStarted = false;
      this.isLoadTasksFinished = true;
      this.isShowSpinner = false;
    });
    this.appService.iterationObsr.subscribe(list =>
      {
        this.iterationItems = this.appService.filterActivities(list);
      });

  }
  ngOnInit()
  {
    this.appService.loadData();
  }
  getTime(time)
  {
    if (time.STIMEI !== '00:00')
      return time.STIMEI + " - " + time.ETIMEI;
    return time.CQUANT + " שעות";
  }
  endReport(report)
  {
    this.appService.endActREport(report);
    let dateObj = this.appService.getCurrentTime();
    report.ETIMEI = dateObj.hoursStr + ":" + dateObj.minutesStr;
    report.isActive = false;
  }
  startReport(actNum, event)
  {
    this.appService.startActReport(actNum);
    this.isShowRepSpinner = true;
    event.stopPropagation();
  }
  reportHours(item, event)
  {
    let popover = this.popoverCtrl.create('HoursReport', { activity: item }, { showBackdrop: true, cssClass: "hours-report-popover" });
    popover.present();
    event.stopPropagation();
  }
  onSegmentChanged(segmentButton)
  {
    this.isShowSpinner = false;
    if (segmentButton.value == "myTasks")
    {
      if (!this.isLoadTasksFinished && this.isLoadDataStarted)
        this.isShowSpinner = true;
      this.isShowTodayReports = false;
    }
    else
    {
      if (!this.isLoadReportsFinished && this.isLoadDataStarted)
        this.isShowSpinner = true;
      this.isShowTodayReports = true;
    }
  }
  editActivity(activity)
  {
    // this.appService.retrieveActivity(activity['TODOREF'])
    //   .then(act =>
    //   {
    activity.PROJACT = activity.TODOREF;
    activity.OWNER = activity.OWNERLOGIN;
    activity.STEPSTATUSDES = activity.STATDES;
    activity.ACTDES = activity.DETAILS;
    let popover = this.popoverCtrl.create('ActivityEditor', { activity: activity }, { showBackdrop: true, cssClass: 'activity-editor-popover' });
    popover.present();
    // })
    // .catch(error => { });


  }

}
