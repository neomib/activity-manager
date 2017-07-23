import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { FormService, ObjToIterable } from 'priority-ionic';
import { AppService } from '../../providers/app-service';

/**
 * Generated class for the ActivityEditor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({})
@Component({
  selector: 'activity-editor',
  templateUrl: 'activity-editor.html',
})
export class ActivityEditor
{
  list;
  titleList: string[] = [];
  title = {};
  subject: string;
  hours: number;
  constructor(private appService: AppService,
    private formServie: FormService,
    private nav: NavController,
    private objToIterable: ObjToIterable)
  {
    this.list = this.appService.activityList;
    this.appService.activityListObsr.subscribe(list =>
    {

      this.list = list;
    });
  }
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ActivityEditor');
  }
  getActTitle(item)
  {
    if (!item || !item.ACTDES)
      return "";
    return item.ACTDES;
  }
  titleChanged(title: string)
  {
    if (title != '')
    {
      this.titleList = this.list.filter((item, index, array) =>
      {
        return item.LEVEL == "3" && this.getActTitle(item).toLocaleLowerCase().includes(title.toLocaleLowerCase())
      })

    }
    else
    {
      this.titleList = [];
    }

  }
  chooseTitle(activity)
  {
    this.title = activity;
    this.titleList = [];
  }
  save()
  {
    this.appService.createNewActivity(this.title, this.subject);
    this.title = {};
    this.subject = "";
    this.titleList = [];
    this.hours = 0;
  }
  leavePage()
  {
    this.nav.pop();
  }
}
