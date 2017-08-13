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
  displayActs: any[];
  activityManager;
  activityManagerArr;
  currentAct: any;

  isLoadingActs: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService, private objToIterable: ObjToIterable)
  {
    this.isLoadingActs = false;
    this.activityManager = {};
    this.currentAct = {};
    this.displayActs=[];
    this.appService.getKeyVkaue("priority-activities")
      .then(list =>
      {
        if (list)
        {

          if (list.length > 0)
            this.setCurrentActivity(list[0]);
          this.displayActs = list;
        }

      })
      .catch(() => { });
    this.appService.activityListObsr.subscribe(list =>
    {
      this.isLoadingActs = true;
      this.organizeActivities(list);
    });
  }
  setCurrentActivity(act)
  {
    this.currentAct.isActive = false;
    act.isActive = true;
    this.currentAct = act;
  }
 
  getSubActColor(act)
  {
    switch (act.STEPSTATUSDES)
    {
      case 'בוצעה':
      case 'התקבל':
        return "#28CC9E";
      case "חזר מ QA":
        return "crimson";
      case 'בדיקת QA':
        return '#b1b1b1';
    }
    return "#1F4E5F";
  }

  organizeActivities(list)
  {
    list.map((value, index, arr) =>
    {
      let WBS: string = value["WBS"];
      let level = Number(value["LEVEL"]);
      let project: string = value["DOCNO"];

      if (level == 3)
      {
        this.activityManager[project + WBS] = value;
        this.activityManager[project + WBS].subActDone = [];
        this.activityManager[project + WBS].subActQA = [];
        this.activityManager[project + WBS].subActOther = [];
        this.activityManager[project + WBS].subActivities = [];
      }
      else
      {
        let parentWBS = WBS.substring(0, WBS.lastIndexOf("."));
        let act = this.activityManager[project + parentWBS];
        if (act)
        {
          act.subActivities.push(value);
          if (this.appService.getisActDone(value))
            act.subActDone.push(value);
          else if (this.appService.getisActQA(value))
            act.subActQA.push(value);
          else
            act.subActOther.push(value);
        }
      }

    });
    this.updateActivities();//updates this.activityManagerArr
    this.appService.storeKEyValue("priority-activities", this.activityManagerArr);
  }
  updateActivities()
  {
    this.displayActs.splice(0);
    this.activityManagerArr = this.appService.objToArray(this.activityManager);
    this.displayActs = this.activityManagerArr;
    if (this.displayActs.length > 0)
      this.setCurrentActivity(this.displayActs[0]);
    this.isLoadingActs = false;
  }
  isActContainsString(act, str: string)
  {
    let item = act.ACTDES;
    return item && item.toLowerCase().indexOf(str.toLowerCase()) > -1;
  }
  getActsBySearch(event)
  {
    let val = event.target.value;
    if (!val || val.trim() == "" || !this.activityManagerArr)
    {
      this.updateActivities();
      return;
    }
    this.displayActs = this.activityManagerArr.filter((act, index, arr) =>
    {
      let isHasChild = act.subActivities.length > 0 &&
        act.subActivities.filter((subact, index, arr) => this.isActContainsString(subact, val)).length > 0;
      return this.isActContainsString(act, val) || isHasChild;
    });
    if (this.displayActs.length > 0)
      this.setCurrentActivity(this.displayActs[0]);
  }
  startReport(activity)
  {
    this.appService.startActReport(activity);
  }
  onmouseover(subact)
  {
    subact.showOpts =  true;
  }
  onmouseout(subact)
  {
    subact.showOpts = false;
  }
}
