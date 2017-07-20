import { Injectable } from '@angular/core';
import { ConfigurationService, FormService, ObjToIterable, Form } from 'priority-ionic';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the AppService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppService
{

    activityFormName: string;

    private userNameForLocalStorage: string;
    private pswdForLocalStorage: string;
    private username: string;
    private password: string;


    // New activity
    newActivityList: Subject<any>;
    activityList: Object;

    constructor(private configService: ConfigurationService, private formService: FormService, private storage: Storage, private objToIterable: ObjToIterable)
    {

        this.activityFormName = "PROJACTS_ONE";

        this.userNameForLocalStorage = "priorityUsername";
        this.pswdForLocalStorage = "priorityPassword";

        this.storage.get(this.userNameForLocalStorage).then(value => this.username = value);
        this.storage.get(this.pswdForLocalStorage).then(value => this.password = value);

        this.newActivityList = new Subject();
        this.activityList = {};
    }
    // ***** Login *****

    private storeLoginData(userName, password)
    {
        this.storage.set(this.userNameForLocalStorage, userName);
        this.storage.set(this.pswdForLocalStorage, password);
    }
    isLogInDataStored()
    {
        return this.storage.get(this.userNameForLocalStorage) && this.storage.get(this.pswdForLocalStorage);
    }
    clearLogInData()
    {
        this.storage.remove(this.userNameForLocalStorage);
        this.storage.remove(this.pswdForLocalStorage);
    }
    storeKEyValue(key: string, value: any)
    {
        this.storage.set(key, value);
    }
    getKeyVkaue(key: string)
    {
        return this.storage.get(key);
    }
    getUserName()
    {
        return this.username;
    }
    getPassword()
    {
        return this.password;
    }
    getLang(): number
    {
        return this.configService.configuration ? this.configService.configuration.language : 1;
    }
    getCompanyName()
    {
        return this.configService.configuration ? this.configService.configuration.company : "";
    }
    private setConfig()
    {
        this.configService.config({
            url: '',
            tabulaini: 'tabests.ini',
            language: 1,
            company: 'geshbel',
            appname: 'Time_Tracking',
            devicename: ''
        });
    }
    login(username?, password?): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            username = username ? username : this.getUserName();
            password = password ? password : this.getPassword();
            this.setConfig();
            this.configService.logIn(username, password).then(
                () =>
                {
                    this.storeLoginData(username, password);
                    this.username = username;
                    this.password = password;
                    resolve();
                },
                reason =>
                {
                    reject(reason);
                });
        });
    }
    ///////// new activity
    getActivities = () =>
    {
        let filter = {
            or: 0,
            ignorecase: 1,
            QueryValues:
            [
                {
                    "field": "ESHB_EPROJDES",
                    "fromval": 'PLATFORM',
                    "toval": "",
                    "op": "=",
                    "sort": 0,
                    "isdesc": 0
                },
                {
                    "field": "LEVEL",
                    "fromval": "3",
                    "toval": "",
                    "op": ">=",
                    "sort": 0,
                    "isdesc": 1
                }]
        };
        let secondfilter = {
            or: 0,
            ignorecase: 1,
            QueryValues:
            [
                {
                    "field": "ESHB_EPROJDES",
                    "fromval": 'MOBILE',
                    "toval": "",
                    "op": "=",
                    "sort": 0,
                    "isdesc": 0
                },
                {
                    "field": "LEVEL",
                    "fromval": "3",
                    "toval": "",
                    "op": ">=",
                    "sort": 0,
                    "isdesc": 1
                }]
        };
        this.formService.startFormAndGetRows(this.activityFormName, this.getCompanyName(), filter)
            .then(form =>
            {
                let rows = this.objToIterable.transform(this.formService.getLocalRows(form));
                rows.map((item, index, arr) => { this.activityList[item['ACTDES']] = item });
                this.newActivityList.next(this.activityList);
                return this.formService.setSearchFilter(form, secondfilter);

            })
            .then(() =>
            {
                return this.formService.getRows(this.formService.getForm(this.activityFormName), 1);
            })
            .then((rows: any[]) =>
            {
                rows = rows[this.activityFormName];
                rows = this.objToIterable.transform(rows);
                rows.map((item, index, arr) => { this.activityList[item['ACTDES']] = item });
                this.newActivityList.next(this.activityList);

            })
            .catch(() => { });

    }
    addActivity(parentAct, subject)
    {
        let WBS = parentAct.WBS + "." + (parentAct.subActivities.length + 1);
        let project = parentAct.DOCNO;
        let actForm = this.formService.getForm(this.activityFormName);
        let ind = -11;
        this.formService.newRow(actForm)
            .then(index =>
            {
                ind = index;
                return this.formService.updateField(actForm, ind, "DOCNO", project);
            })
            .then(() =>
            {
                return this.formService.updateField(actForm, ind, "WBS", WBS);
            })
            .then(() =>
            {
                return this.formService.updateField(actForm, ind, "ACTDES", subject);
            })
            .then(() =>
            {
                this.formService.saveRow(actForm, ind, 0);
            })
            .then(() =>
            {
                this.activityList[subject] = this.formService.getFormRow(actForm, ind);
                this.newActivityList.next(this.activityList)
            })
            .catch();
    }

}
