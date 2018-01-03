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
    this.setAct(act);
  }
  constructor(private appService: AppService,
    private formServie: FormService,
    private nav: NavController,
    private objToIterable: ObjToIterable,
    private navParams: NavParams)
  {
    this.textRows = 1;
    this.list = this.appService.activityList;
    if (this.navParams.data.activity)
      this.setAct(this.navParams.data.activity);
    this.appService.activityListObsr.subscribe(list =>
    {
      this.getActText();
    });

  }
  setAct(act)
  {
    this.activity = act;
    if (this.appService.activityList.length > 0 && !this.appService.activityListStart)
    {
      this.getActText();
    }
  }
  getActTitle(item)
  {
    if (!item || !item.ACTDES)
      return "";
    return item.ACTDES;
  }
  getActText()
  {
    this.appService.getActivityText(this.activity.PROJACT)
      .then(text =>
      {
        this.activityText = text;
      })
      .catch(() => { });
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
