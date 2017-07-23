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
  isShow: boolean;
  constructor(private appService: AppService)
  {
    this.isShow = false;
  }
  startReport()
  {
    this.appService.startActReport(this.activity);
  }
  @HostListener('moueseover') onhover()
  {
    this.isShow = true;
  }
   @HostListener('blur') onblur()
  {
    this.isShow = false;
  }
}
