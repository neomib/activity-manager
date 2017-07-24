import { Injectable } from '@angular/core';
import { ConfigurationService, FormService, ObjToIterable, Form, ProfileConfig } from 'priority-ionic';
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
    hoursFormName: string;

    private userNameForLocalStorage: string;
    private pswdForLocalStorage: string;
    private username: string;
    private password: string;


    // activity
    activityListObsr: Subject<any>;
    activityList: any[];

    //reports
    reportListObsr: Subject<any>;
    reportList: any[];

    constructor(private configService: ConfigurationService, private formService: FormService, private storage: Storage, private objToIterable: ObjToIterable)
    {

        this.activityFormName = "PROJACTS_ONE";
        this.hoursFormName = "TRANSORDER_q";

        this.userNameForLocalStorage = "priorityUsername";
        this.pswdForLocalStorage = "priorityPassword";

        //this.storage.get(this.userNameForLocalStorage).then(value => this.username = value);
        //this.storage.get(this.pswdForLocalStorage).then(value => this.password = value);

        this.activityListObsr = new Subject();
        this.activityList = [];

        this.reportListObsr = new Subject();
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
    getCompanyName(): ProfileConfig
    {
        return this.configService.configuration ? this.configService.configuration.profileConfig : { company: '' };
    }
    private setConfig()
    {
        this.configService.config({
            url: '',
            tabulaini: 'tabests.ini',
            language: 1,
            profileConfig: { company: 'geshbel' },
            appname: 'Time_Tracking',
            devicename: ''
        });
    }
    objToArray(obj): any[]
    {
        return this.objToIterable.transform(obj);
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
                   // this.storeLoginData(username, password);
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
    getForm(formName, isAutoRetrieve = 0): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let form = this.formService.getForm(formName);
            if (!form)
            {
                this.formService.startParentForm(formName, this.configService.configuration.profileConfig, isAutoRetrieve)
                    .then(resultform => resolve(resultform))
                    .catch(reason => reject(reason));
            }
            else
            {
                form.isAlive()
                    .then(isAlive =>
                    {
                        if (isAlive)
                        {
                            resolve(form);
                        }
                        else
                        {
                            this.formService.startParentForm(formName, this.getCompanyName(), isAutoRetrieve)
                                .then(resultform => resolve(resultform));
                        }
                    })
                    .catch(
                    reason =>
                    {
                        reject(reason)
                    });
            }
        });
    }
    /******************* Activities Management *************/
    getActivities(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.activityList.splice(0);
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
            let thirdfilter = {
                or: 0,
                ignorecase: 1,
                QueryValues:
                [
                    {
                        "field": "ESHB_EPROJDES",
                        "fromval": 'UI',
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
                    let rows = this.objToArray(this.formService.getLocalRows(form));
                    this.activityList = this.activityList.concat(rows);
                    this.activityListObsr.next(this.activityList);
                    return this.formService.setSearchFilter(form, secondfilter);
                })
                .then(() =>
                {
                    return this.formService.getRows(this.formService.getForm(this.activityFormName), 1);
                })
                .then((rows: any[]) =>
                {
                    rows = this.objToArray(rows);
                    this.activityList = this.activityList.concat(rows);
                    this.activityListObsr.next(this.activityList);
                    return this.formService.setSearchFilter(this.formService.getForm(this.activityFormName), thirdfilter);
                })
                .then(() =>
                {
                    return this.formService.getRows(this.formService.getForm(this.activityFormName), 1);
                })
                .then((rows: any[]) =>
                {
                    rows = this.objToArray(rows);
                    this.activityList = this.activityList.concat(rows);
                    this.activityListObsr.next(this.activityList);
                    resolve();
                })
                .catch(() => reject());

        });

    }
    createNewActivity(parentAct, subject)
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
                this.activityList.push(this.formService.getFormRow(actForm, ind));
                this.activityListObsr.next(this.activityList)
            })
            .catch();
    }
    /******************* Time Tracking *************/
    getCurrentTime()
    {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        let hoursStr = hours < 10 ? '0' + hours : '' + hours;
        let minutesStr = minutes < 10 ? '0' + minutes : minutes + '';

        let month: string | number = date.getMonth() + 1;
        month = month < 10 ? '0' + month : '' + month;

        let day: string | number = date.getDate();
        day = day < 10 ? '0' + day : '' + day;

        return {
            date: date,
            dateStr: date.toISOString(),
            hours: hours,
            hoursStr: hoursStr,
            minutes: minutes,
            minutesStr: minutesStr,
            dateFormated: day + "." + month + "." + date.getFullYear().toString().substr(2, 2)
        };
    }

    getTodaysReports()
    {

        let today = this.getCurrentTime().dateStr;//.dateFormated.replace(/\./g, "\/");
        let filter = {
            or: 0,
            ignorecase: 1,
            QueryValues:
            [
                {
                    "field": "CURDATE",
                    "fromval": today,
                    "toval": "",
                    "op": "=",
                    "sort": 0,
                    "isdesc": 0
                },
                {
                    "field": "USERLOGIN",
                    "fromval": this.getUserName(),
                    "toval": "",
                    "op": "=",
                    "sort": 0,
                    "isdesc": 0
                },
                {
                    "field": "STIMEI",
                    "fromval": "00:00",
                    "toval": "",
                    "op": "<>",
                    "sort": 1,
                    "isdesc": 1
                }
            ]
        };

        let hoursForm: Form;
        this.getForm(this.hoursFormName)
            .then((form: Form) =>
            {
                hoursForm = form;
                return this.formService.setSearchFilter(hoursForm, filter);
            })
            .then(() =>
            {
                return this.formService.getRows(hoursForm, 1);
            })
            .then(rows =>
            {
                if (rows)
                {
                    if (rows[1]['ETIMEI'] == "00:00")
                        rows[1].isActive = true;
                    this.reportList = rows;
                }
                this.reportListObsr.next(this.objToIterable.transform(rows));
            })
            .catch(() => { });
    }
    endActREport(report): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let filter = {
                or: 0,
                ignorecase: 1,
                QueryValues:
                [
                    {
                        "field": "TRANS",
                        "fromval": report["TRANS"],
                        "toval": "",
                        "op": "=",
                        "sort": 0,
                        "isdesc": 0
                    }]
            };

            let hoursForm: Form;
            this.getForm(this.hoursFormName)
                .then(form =>
                {
                    hoursForm = form;
                    return this.formService.setSearchFilter(form, filter);
                })
                .then(() =>
                {
                    return hoursForm.getRows(1);
                })
                .then(rows =>
                {
                    let dateObj = this.getCurrentTime();
                    return hoursForm.fieldUpdate("ETIMEI", dateObj.hoursStr + ":" + dateObj.minutesStr)
                })
                .then(() =>
                {
                    return hoursForm.saveRow(0);
                })
                .then(() =>
                {
                    //this.activeTask=null;
                    resolve();
                })
                .catch(() => { reject(); });
        });
    }
    startActReport(activity)
    {
        let activitySubform;

        let dateObj = this.getCurrentTime();

        // activity.hours = dateObj.hours;
        // activity.minutes = dateObj.minutes;
        // activity.startDate = dateObj.date.toLocaleDateString();
        // activity.dateStr = dateObj.dateStr;
        // activity.dateFormated = dateObj.dateFormated;
        //this.activeTask = activity;

        let hoursForm: Form;
        this.getForm(this.hoursFormName)
            .then(form =>
            {
                hoursForm = form;
                return hoursForm.newRow();
            })
            .then(() =>
            {
                //date
                return hoursForm.fieldUpdate("CURDATE", dateObj.dateStr);
            })
            .then(() =>
            {
                //project
                return hoursForm.fieldUpdate("DOCNO", activity['DOCNO']);
            })
            .then(() =>
            {

                return hoursForm.fieldUpdate("WBS", activity['WBS']);
            })
            .then(() =>
            {
                return hoursForm.fieldUpdate("STIMEI", dateObj.hoursStr + ":" + dateObj.minutesStr);
            })
            .then(() =>
            {
                return hoursForm.saveRow(0);
            })
            .then(() =>
            {
                return this.getTodaysReports();
            })
            .catch(err =>
            {
                // this.activeTask = null;
                console.log(err);
            });
    }

}
