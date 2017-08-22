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
  myTasks: any[];
  currentDate: string;
  isShowSpinner: boolean;
  isShowTodayReports: boolean;
 
  isLoadDataStarted: boolean;
  isLoadReportsFinished:boolean;
  isLoadTasksFinished:boolean;

  selectedSegment;

  constructor(public navCtrl: NavController, private appService: AppService)
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
      this.isLoadReportsFinished=false;
      this.isLoadTasksFinished=false;
    });
    this.appService.reportListObsr.subscribe(list =>
    {
      this.hoursList = list;
      this.isShowSpinner = false;
      this.isLoadReportsFinished=true;
    });
    this.appService.todoListObsr.subscribe(list =>
    {
      this.myTasks = this.appService.getToDoActivities();
      this.isShowSpinner = false;
      this.isLoadDataStarted = false;
      this.isLoadTasksFinished=true;
    });
    this.currentDate = this.appService.getCurrentTime().dateFormated;
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

}
