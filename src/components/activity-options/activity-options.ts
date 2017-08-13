import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { AppService } from '../../providers/app-service';
/**
 * Generated class for the ActivityOptions component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'activity-options',
  templateUrl: 'activity-options.html'
})
export class ActivityOptions
{
  @Input() activity;
  @Input() parentActivity;
  isShow: boolean;
  constructor(private appService: AppService)
  {
    this.isShow = false;
  }
  startReport()
  {
    this.appService.startActReport(this.activity);
  }
  finishActivity()
  {
    let oldAct = { STEPSTATUSDES: this.activity.STEPSTATUSDES };
    let oldIndex = 0;
    this.parentActivity.subActDone.push(this.activity);

    if (this.appService.getisActQA(this.activity))
    {
      oldIndex = this.parentActivity.subActQA.indexOf(this.activity);
      this.parentActivity.subActQA.splice(oldIndex, 1);
    }
    else
    {
      oldIndex = this.parentActivity.subActOther.indexOf(this.activity);
      this.parentActivity.subActOther.splice(oldIndex, 1);
    }
    this.activity.STEPSTATUSDES = "בוצעה";
    this.appService.finishActivity(this.activity)
      .then(() => { })
      .catch(() =>
      {
        this.parentActivity.subActDone.splice(this.parentActivity.subActDone.indexOf(this.activity), 1);

        if (this.appService.getisActQA(oldAct))
          this.parentActivity.subActQA.splice(oldIndex,0,this.activity);
        else
          this.parentActivity.subActOther.splice(oldIndex,0,this.activity);
        this.activity.STEPSTATUSDES = oldAct.STEPSTATUSDES;
      });
  }
}
