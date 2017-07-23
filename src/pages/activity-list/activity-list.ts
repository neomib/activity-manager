import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { ObjToIterable } from 'priority-ionic';

@IonicPage({})
@Component({
  selector: 'activity-list',
  templateUrl: 'activity-list.html'
})
export class ActivityList
{

  activityList: any[];
  activityManager;
  activityManagerArr;
  activities: any[];
  isLoadingActs: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService, private objToIterable: ObjToIterable)
  {
    this.isLoadingActs = false;
    this.activityManager = {};
    this.activities = [];
    this.appService.getKeyVkaue("priority-activities")
      .then(list =>
      {
        if (list)
          this.activities = list;
      })
      .catch(() => { });
    this.appService.activityListObsr.subscribe(list =>
    {
      this.isLoadingActs = true;
      this.activityList = list;
      this.organizeActivities();
    });
  }
  getSubActColor(act)
  {
    switch (act.STEPSTATUSDES)
    {
      case 'בוצעה':
      case 'התקבל':
        return "green";
      case "חזר מ QA":
        return "crimson";
      case 'בדיקת QA':
        return '#d6d6d6';
    }
    return "#1e6bc6";
  }

  organizeActivities()
  {
    this.activityList.map((value, index, arr) =>
    {
      let WBS: string = value["WBS"];
      let level = Number(value["LEVEL"]);

      if (level == 3)
      {
        this.activityManager[WBS] = value;
        this.activityManager[WBS].subActivities = [];
      }
      else
      {
        let parentWBS = WBS.substring(0, WBS.lastIndexOf("."));
        if (this.activityManager[parentWBS])
          this.activityManager[parentWBS].subActivities.push(value);
      }

    });
    this.updateActivities();
    this.appService.storeKEyValue("priority-activities", this.activities);
  }
  updateActivities()
  {
    this.activities.splice(0);
    Object.keys(this.activityManager).map((value, index, arr) => { this.activities.push(this.activityManager[value]) });
    this.activityManagerArr = this.activities;
    this.isLoadingActs = false;
  }
  getActsBySearch(event)
  {
    let val = event.target.value;
    if (!val || val.trim() == "" || !this.activityManagerArr)
    {
      this.updateActivities();
      return;
    }
    this.activities = this.activityManagerArr.filter((act, index, arr) =>
    {
      let item = act.ACTDES;
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }
  startReport(activity)
  {
    this.appService.startActReport(activity);
  }
}
