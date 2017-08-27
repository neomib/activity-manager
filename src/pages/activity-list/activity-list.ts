import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage, PopoverController } from 'ionic-angular';
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
  currentSubAct: any;

  isLoadingActs: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService, private objToIterable: ObjToIterable, private popoverCtrl: PopoverController)
  {
    this.isLoadingActs = false;
    this.activityManager = {};
    this.currentAct = {};
    this.displayActs = [];
    this.appService.getKeyVkaue(this.appService.activitiesLocalStorage)
      .then(list =>
      {
        if (list)
        {

          if (list.length > 0 && list[0].headActivities.length > 0)
            this.setCurrentActivity(list[0].headActivities[0]);
          this.displayActs = list;
        }

      })
      .catch(() => { });
    this.appService.activityListObsr.subscribe(list =>
    {
      this.isLoadingActs = true;
      this.organizeActivities(list);
    });
    this.appService.loadDataObsr.subscribe(() =>
    {
      this.isLoadingActs = true;
    });
  }
  setCurrentActivity(act)
  {
    this.currentAct.isActive = false;
    act.isActive = true;
    this.currentAct = act;
    this.currentSubAct = undefined;
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
      let wbsParts = WBS.split(".");
      let parentWBS = wbsParts[0] + "." + wbsParts[1];
      let parentAct = this.activityManager[project + parentWBS];

      let nextInd = index + 1;
      if (level == 2 && nextInd < arr.length && Number(arr[nextInd].LEVEL) > 2)
      {
        this.activityManager[project + WBS] = value;
        this.activityManager[project + WBS].headActivities = [];
      }
      else if (level == 3)
      {
        if (parentAct)
        {
          let act = value;
          act.subActDone = [];
          act.subActQA = [];
          act.subActOther = [];
          act.subActivities = [];
          parentAct.headActivities.push(act);
        }
      }
      else if (level > 3)
      {
        if (parentAct)
        {
          let headAct = parentAct.headActivities[parentAct.headActivities.length - 1];
          if (headAct)
          {
            headAct.subActivities.push(value);
            if (this.appService.getisActDone(value))
              headAct.subActDone.push(value);
            else if (this.appService.getisActQA(value))
              headAct.subActQA.push(value);
            else
              headAct.subActOther.push(value);
          }
        }
      }

    });
    this.updateActivities();//updates this.activityManagerArr
    this.appService.storeKeyValue(this.appService.activitiesLocalStorage, this.activityManagerArr);
  }
  updateActivities()
  {
    this.displayActs.splice(0);
    this.activityManagerArr = this.appService.objToArray(this.activityManager);
    this.displayActs = this.activityManagerArr;
    if (this.displayActs.length > 0 && this.displayActs[0].headActivities.length > 0)
      this.setCurrentActivity(this.displayActs[0].headActivities[0]);
    this.isLoadingActs = false;
  }
  isActContainsString(act, str: string)
  {
    let item = act.ACTDES;
    return (item && item.toLowerCase().indexOf(str.toLowerCase()) > -1)
      || act.WBS.indexOf(str) > -1 || act.PROJACT.indexOf(str) > -1;
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
      let isHasHead = act.headActivities.filter(
        (headact, index, arr) =>
        {
          let isHasChild = headact.subActivities.length > 0 &&
            headact.subActivities.filter((subact, index, arr) => this.isActContainsString(subact, val)).length > 0;
          return this.isActContainsString(headact, val) || isHasChild;
        });
      return this.isActContainsString(act, val) || isHasHead;
    });
    if (this.displayActs.length > 0 && this.displayActs[0].headActivities.length > 0)
      this.setCurrentActivity(this.displayActs[0].headActivities[0]);
  }
  startReport(activity)
  {
    this.appService.startActReport(activity);
  }
  onmouseover(subact)
  {
    subact.showOpts = true;
  }
  onmouseout(subact)
  {
    subact.showOpts = false;
  }
  selectSubAct(subAct)
  {
    this.currentSubAct = subAct;
    // let popover=this.popoverCtrl.create('ActivityEditor',{activity:this.currentSubAct});
    // popover.present();
  }
  closeactivityEditor()
  {
    this.currentSubAct = undefined;
  }
}
