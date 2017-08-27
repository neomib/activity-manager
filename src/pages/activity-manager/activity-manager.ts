import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,TextInput } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { Subject } from 'rxjs/Subject';
import { SearchResult } from 'priority-ionic';

/**
 * Generated class for the ActivityManager page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'activity-manager',
  templateUrl: 'activity-manager.html',
})
export class ActivityManager
{
  projects: Subject<any>;
  projInput: string;
  projSearchList: SearchResult[];
  isShowSpinner: boolean;
  isShowAddProjInput: boolean;

  @ViewChild('projInputElem') projInputElem:TextInput;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService)
  {
    this.projects = this.appService.projectListObsr;
    this.isShowAddProjInput = false;
    this.isShowSpinner = false;

  }
  loadData()
  {
    this.appService.loadData();
  }
  getprojects(): any[]
  {
    return this.appService.projList;
  }
  toggleAddProjInput()
  {
    this.isShowAddProjInput = !this.isShowAddProjInput;
    if (!this.isShowAddProjInput)
      this.projSearchList = [];
    else
      setTimeout(()=> {
        this.projInputElem.setFocus();
      }, 20);
      
  }
  deleteProject(proj)
  {
this.appService.deleteProject(proj);
  }
  addNewProject()
  {
    let proj = this.projSearchList.filter((value, index, arr) => value.string1 == this.projInput);
    if (proj.length>0)
      this.projSelected(proj[0]);
  }
  projSelected(proj)
  {
    proj.DOCNO = proj.retval;
    proj.PROJDES = proj.string1;
    this.appService.addProject(proj);
    this.projSearchList = [];
    this.projInput="";
    this.toggleAddProjInput();
  }
  projInputClick(event)
  {
    event.stopPropagation();
  }
  searchForProject()
  {
    if (this.projInput.length > 2)
    {
      this.isShowSpinner = true;
      this.appService.searchProject(this.projInput, this.projSearchList.length<=0)
        .then(projList =>
        {
          if (projList.length == 1 && !projList[0].retval )
            projList = [];
          this.projSearchList = projList;
          this.isShowSpinner = false;
        })
        .catch();
    }
    else
    {
      this.projSearchList = [];
    }

  }
  keypressHandler(evnt)
  {
    let key = evnt.key;
    if (key == "Enter")
      this.addNewProject();
  }

}
