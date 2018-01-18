import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, ViewController } from 'ionic-angular';
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
  // text
  text: string;
  textInput: string;

  // activity details
  activity;
  title: string;
  comment: string;
  status: string;
  statusList;
  owner: string;
  actNumber: string;

  //activity about
  selectedSegment;

  @ViewChild('titleElem') titleElem;

  constructor(private appService: AppService,
    private formServie: FormService,
    private nav: NavController,
    private objToIterable: ObjToIterable,
    private navParams: NavParams,
    public viewCtrl: ViewController)
  {
    this.selectedSegment = "activityState";
    if (this.navParams.data.activity)
      this.setAct(this.navParams.data.activity);
  }
  dismiss()
  {
    this.viewCtrl.dismiss();
  }
  setAct(act)
  {
    this.activity = act;
    this.actNumber = act.PROJACT;
    this.title = act.ACTDES;
    this.comment = act.PRIORITYDES || 'הוסף הערה לפעילות';
    this.status = act.STEPSTATUSDES;
    this.owner = act.OWNER;
    this.getActText();
  }
  setStatus()
  {
    this.appService.getActivityStatuses(this.actNumber)
      .then(result =>
      {

      })
      .catch(() => { });
  }
  getActText()
  {
    this.appService.getActivityText(this.actNumber)
      .then(({ text, activity }) =>
      {
        this.activity = activity;
        this.text = text;
      })
      .catch(() => { });
  }
  getOwnerInitials()
  {
    // if (this.activity.ESH_USERNAME)
    // {
    //   let initials = this.activity.ESH_USERNAME.split(' ');
    //   if (initials.length == 2)
    //   {
    //     return initials[0][0] + initials[1][0];
    //   }
    // }
    // return '';
    return this.owner ? this.owner[0] : '';
  }
  resizeTitle(event)
  {
    let element = this.titleElem._native.nativeElement;
    let containerElement = this.titleElem._elementRef.nativeElement;
    let height = element.scrollHeight;

    if (event.inputType === 'deleteContentBackward')
    {
      let fontSize: string = element.style.fontSize;
      fontSize = fontSize.substr(0, fontSize.length - 2);
      let fontNumber = Number(fontSize);
      if (height - fontNumber >= fontNumber && this.title.trim() !== this.title)
      {
        height = height - fontNumber;
        this.title = this.title.trim();
      }
    }
    element.style.height = containerElement.style.height = height + "px";
    event.stopPropagation();
  }
  ///******* text **********/

  textChanged(event)
  {
    let key = event.key;
    if (event.ctrlKey && key == "Enter")
    {
      this.textInput = "";
      let value = event.target.value;
      value = value.replace(/\n/g, '</br>');
      this.appService.addNewActivityText(value)
        .then(text => this.text = text)
        .catch(() => { });
    }

  }
  /*************************************** activity about */
  onSegmentChanged(segmentButton)
  {
    // this.isShowSpinner = false;
    // if (segmentButton.value == "myTasks")
    // {
    //   if (!this.isLoadTasksFinished && this.isLoadDataStarted)
    //     this.isShowSpinner = true;
    //   this.isShowTodayReports = false;
    // }
    // else
    // {
    //   if (!this.isLoadReportsFinished && this.isLoadDataStarted)
    //     this.isShowSpinner = true;
    //   this.isShowTodayReports = true;
    // }
  }

}
