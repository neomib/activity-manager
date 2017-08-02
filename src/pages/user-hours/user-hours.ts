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
  myTasks:any[];
  currentDate:string;
  isShowSpinner:boolean;
  isShowTodayReports:boolean;

  selectedSegment;
  
  constructor(public navCtrl: NavController, private appService: AppService)
  {
    this.selectedSegment = "todayReports";
    this.isShowSpinner=true;
    this.isShowTodayReports=true;
    this.appService.reportListObsr.subscribe(list =>
    {
      this.hoursList = list;
      this.isShowSpinner=false;
    });
    this.appService.todoListObsr.subscribe(list =>
    {
     this.myTasks=this.appService.getToDoActivities();
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
   onSegmentChanged(segmentButton)
    {
        if (segmentButton.value == "myTasks")
           this.isShowTodayReports=false;
        else
            this.isShowTodayReports=true;
    }

}
