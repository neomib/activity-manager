import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { FormService, ObjToIterable, Form } from 'priority-ionic';
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

  text: string;
  activityText: string;
  textRows: number;
  activity;

  @Input('activity')
  set setActivity(act)
  {
    this.activity = act;
    this.appService.getActivityText(this.activity.PROJACT)
      .then(text =>
      {
        this.activityText = text;
      })
      .catch(() => { });
  }
  constructor(private appService: AppService,
    private formServie: FormService,
    private nav: NavController,
    private objToIterable: ObjToIterable)
  {
    this.textRows = 1;
    this.list = this.appService.activityList;
    this.appService.activityListObsr.subscribe(list =>
    {

      this.list = list;
    });
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
    if (this.title == "" || this.subject == "")
      return;
    this.appService.createNewActivity(this.title, this.subject);
    this.title = {};
    this.subject = "";
    this.titleList = [];
    this.hours = 0;
  }
  closeactivityEditor()
  {
    this.activity = undefined;
  }

  ///******* text **********/

  onTextChange(evnt)
  {
    let key = evnt.key;
    if (key == "Enter")
      this.textRows++;
  }
  getTextRows()
  {
    return this.textRows;
  }
}
