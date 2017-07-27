import { Injectable } from '@angular/core';
import { ConfigurationService, FormService, ObjToIterable, PriorityService, MessageHandler } from 'priority-ionic';
import { Form, ProfileConfig, ServerResponse, ServerResponseCode, ServerResponseType, Constants, MessageOptions } from 'priority-ionic';
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

    //projects
    projectListObsr: Subject<any>;
    projList: any[];

    constructor(private configService: ConfigurationService,
        private formService: FormService,
        private storage: Storage,
        private objToIterable: ObjToIterable,
        private priorityService: PriorityService,
        private messageHandler: MessageHandler)
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

        this.projectListObsr = new Subject();
        this.projList = [{name:'PLATFORM',title:'פלטפורמה'}, {name:'MOBILE',title:'מובייל'}, {name:'UI',title:'UI'}];
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
    errorAndWarningMsgHandler = (serverMsg: ServerResponse) =>
    {
        if (serverMsg.code === ServerResponseCode.FailedPreviousRequest)
        {
            return;
        }
        let isError;
        let options: MessageOptions = {};
        if (serverMsg.fatal)
        {
            //If the error is a fatal error adds Constants.fatalErrorMsg to the message.
            this.messageHandler.showErrorOrWarning(true, "<b>" + Constants.fatalErrorMsg + "</b>" + serverMsg.message);
            return;
        }

        // Sets is'Error' and message title.
        if (serverMsg.type == ServerResponseType.Error || serverMsg.type == ServerResponseType.APIError || serverMsg.code == ServerResponseCode.Stop)
        {
            isError = true;
            options.title = serverMsg.code == ServerResponseCode.Information ? Constants.defaultMsgTitle : Constants.errorTitle;
            this.messageHandler.showErrorOrWarning(isError, serverMsg.message, () => { }, () => { }, options);
        }
        else
        {
            this.formService.approveWarn(serverMsg.form);
        }
    }

    getForm(formName, isAutoRetrieve = 0): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let form = this.formService.getForm(formName);
            if (!form)
            {
                this.formService.startParentForm(formName, this.configService.configuration.profileConfig, isAutoRetrieve, this.errorAndWarningMsgHandler)
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
                            this.formService.startParentForm(formName, this.getCompanyName(), isAutoRetrieve, this.errorAndWarningMsgHandler)
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
    loadData()
    {
        this.getProjects();
        this.getTodaysReports()
            .then(() => this.getActivities())
            .catch(() => { });
    }
    setFilterAndGetActs(filter, previousSearch: Promise<any>): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let actsForm = this.formService.getForm(this.activityFormName);
            previousSearch
                .then(() =>
                {
                    return this.formService.setSearchFilter(actsForm, filter);
                })
                .then(() =>
                {
                    return this.formService.getRows(actsForm, 1);
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
    /******************* Activities Management *************/
    getActivities()
    {
        this.activityList.splice(0);


        this.getForm(this.activityFormName)
            .then(form =>
            {
                let previousSearch = new Promise((resolve, reject) => resolve());
                this.projList.map((value, index, arr) =>
                {
                    let filter = {
                        or: 0,
                        ignorecase: 1,
                        QueryValues:
                        [
                            {
                                "field": "ESHB_EPROJDES",
                                "fromval": value,
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
                    previousSearch=this.setFilterAndGetActs(filter, previousSearch);
                    
                });
            })
            .catch(() => { });

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

    getTodaysReports(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let today = this.getCurrentTime().dateStr;
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
                    resolve();
                    if (rows)
                    {
                        if (rows[1] && rows[1]['ETIMEI'] == "00:00")
                            rows[1].isActive = true;
                        this.reportList = rows;
                    }
                    this.reportListObsr.next(this.objToIterable.transform(rows));
                })
                .catch(() => reject());
        });
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
    /////********** Projects ***************/
    getProjects()
    {
        this.projectListObsr.next(this.projList);
    }

}
