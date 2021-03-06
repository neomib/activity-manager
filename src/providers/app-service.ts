import { Injectable } from '@angular/core';
import { ConfigurationService, FormService, ObjToIterable, PriorityService, MessageHandler } from 'priority-ionic';
import { Form, ProfileConfig, ServerResponse, ServerResponseCode, ServerResponseType, Constants, Search, SearchAction, MessageOptions, Filter } from 'priority-ionic';
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
    activityTextFormName: string;
    hoursFormName: string;
    todoListFormName: string;
    followUpFormName: string;
    iterationFormName: string;
    iterationItemsFormName: string;

    projectsLocalStorage: string;
    activitiesLocalStorage: string;
    private userNameForLocalStorage: string;
    private pswdForLocalStorage: string;
    private stickynoteStorage: string;

    private username: string;
    private password: string;


    // activity
    activityListObsr: Subject<any>;
    activityListStartObsr: Subject<any>;
    activityListStart: boolean;
    activityList: any[];

    //reports
    reportListObsr: Subject<any>;
    reportList: any[];

    //projects
    projectListObsr: Subject<any>;
    projList: any[];

    //todolist
    todoListObsr: Subject<any>;
    todoList: any[];

    //todolist
    iterationObsr: Subject<any>;
    iterationItems: any[];

    loadDataObsr: Subject<any>;
    loadDataInterval;

    constructor(private configService: ConfigurationService,
        private formService: FormService,
        private storage: Storage,
        private objToIterable: ObjToIterable,
        private priorityService: PriorityService,
        private messageHandler: MessageHandler)
    {

        this.activityFormName = "PROJACTS_ONE";
        this.activityTextFormName = "PROJACTSTEXT";
        this.hoursFormName = "TRANSORDER_q";
        this.todoListFormName = "TODOLIST";
        this.followUpFormName = "FOLLOWUPLIST";
        this.iterationFormName = "ESH_ITERATIONS";
        this.iterationItemsFormName = "ESH_ITERATIONITEMS";

        this.userNameForLocalStorage = "priority-username";
        this.pswdForLocalStorage = "priority-password";
        this.activitiesLocalStorage = "priority-activities";
        this.projectsLocalStorage = "priority-projects";
        this.stickynoteStorage = "priority-stickynotes";

        //this.storage.get(this.userNameForLocalStorage).then(value => this.username = value);
        //this.storage.get(this.pswdForLocalStorage).then(value => this.password = value);

        this.activityListObsr = new Subject();
        this.activityListStartObsr = new Subject();
        this.activityList = [];
        this.activityListStart = false;

        this.reportListObsr = new Subject();

        this.projectListObsr = new Subject();
        this.projList = [];

        this.todoList = [];
        this.todoListObsr = new Subject();
        this.loadDataObsr = new Subject();

        this.iterationItems = [];
        this.iterationObsr = new Subject();

        this.getKeyVkaue(this.projectsLocalStorage)
            .then(projResult =>
            {
                this.projList = projResult ? projResult : []
            })
            .catch(() => { });
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
    storeKeyValue(key: string, value: any)
    {
        this.storage.set(key, value);
    }
    getKeyVkaue(key: string): Promise<any>
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
            tabulaini: 'tabEsh.ini',
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
        if (serverMsg.fatal || serverMsg.type == ServerResponseType.APIError)
        {
            //If the error is a fatal error adds Constants.fatalErrorMsg to the message.
            //this.messageHandler.showErrorOrWarning(true, "<b>" + Constants.fatalErrorMsg + "</b>" + serverMsg.message);
            return;
        }

        // Sets is'Error' and message title.
        if ((serverMsg.type == ServerResponseType.Error && serverMsg.code != ServerResponseCode.Information) ||
            serverMsg.code == ServerResponseCode.Stop)
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
    getSubForm(formName, parentForm: Form): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            parentForm.isAlive()
                .then(isAlive =>
                {
                    if (isAlive)
                    {
                        this.formService.startSubform(parentForm, formName, this.errorAndWarningMsgHandler)
                            .then(resultform => resolve(resultform))
                            .catch(() => reject());
                    }
                    else
                    {
                        this.getForm(parentForm.name)
                            .then(form =>
                            {
                                this.formService.startSubform(form, formName, this.errorAndWarningMsgHandler)
                                    .then(resultform => resolve(resultform))
                                    .catch(() => reject());
                            })
                            .catch(() => reject());
                    }
                })
                .catch(() => reject());


        });
    }
    loadData()
    {
        let loadFunc = () =>
        {
            // this.messageHandler.showTransLoading();
            this.loadDataObsr.next();
            // this.getProjects();
            this.getTodaysReports()
                // .then(() => this.getActivities())
                .then(() => this.getToDOList())
                .then(() => this.getIteration())
                // .then(()=>this.getFollowUps())
                .then(() => this.messageHandler.hideLoading())
                .catch(() => this.messageHandler.hideLoading());
        };
        loadFunc();
        if (!this.loadDataInterval)
            this.loadDataInterval = setInterval(loadFunc, 18000000);
    }
    getAllActsRowsPerProject(form: Form, rowNum: number, resolve, reject, interNum: number = 0)
    {
        this.formService.getRows(form, rowNum)
            .then((rows: any[]) =>
            {
                rows = this.objToArray(rows);
                this.activityList = this.activityList.concat(rows);
                this.activityListObsr.next(this.activityList);
                if (rows.length >= 100 && interNum < 6)
                    this.getAllActsRowsPerProject(form, Number(rows[rows.length - 1].key) + 1, resolve, reject, ++interNum);
                else
                {
                    resolve();
                }

            })
            .catch(() => reject());
    }
    getAllActsRows(form: Form, rowNum: number): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.getAllActsRowsPerProject(form, rowNum, resolve, reject);
        });
    }
    setFilterAndGetActs(filter, previousSearch: Promise<any>): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let actsForm = this.formService.getForm(this.activityFormName);
            previousSearch
                .then(() =>
                {
                    return this.formService.clearRows(actsForm);
                })
                .then(() =>
                {
                    return this.formService.setSearchFilter(actsForm, filter);
                })
                .then(() =>
                {
                    return this.getAllActsRows(actsForm, 1);
                })
                .then(() =>
                {
                    resolve();
                })
                .catch(() => reject());
        });
    }
    /******************* Activities Management *************/
    getisActDone(act)
    {
        return act.STEPSTATUSDES == "בוצעה" || act.STEPSTATUSDES == "התקבל";
    }
    getisActQA(act)
    {
        return act.STEPSTATUSDES == "חזר מ QA" || act.STEPSTATUSDES == "בדיקת QA";
    }
    getActivities(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.activityListStart = true;
            this.activityListStartObsr.next();
            this.activityList.splice(0);
            this.getForm(this.activityFormName)
                .then(form =>
                {
                    let previousSearch = new Promise((innerresolve, reject) => innerresolve());
                    if (this.projList.length <= 0)
                    {
                        this.activityListObsr.next(this.activityList);
                        this.activityListStart = false;
                        resolve();
                        return;
                    }
                    // let twoYearsAgo=new Date();
                    // twoYearsAgo.setFullYear(twoYearsAgo.getFullYear()-1);
                    // twoYearsAgo.setMonth(0);
                    // twoYearsAgo.setDate(1);
                    this.projList.map((value, index, arr) =>
                    {
                        let filter = {
                            or: 0,
                            ignorecase: 1,
                            QueryValues:
                                [
                                    {
                                        "field": "DOCNO",
                                        "fromval": value.DOCNO,
                                        "toval": "",
                                        "op": "=",
                                        "sort": 0,
                                        "isdesc": 0
                                    },
                                    {
                                        "field": "LEVEL",
                                        "fromval": "2",
                                        "toval": "",
                                        "op": ">=",
                                        "sort": 0,
                                        "isdesc": 0
                                    },
                                ]
                        };
                        previousSearch = this.setFilterAndGetActs(filter, previousSearch).catch(() => { });
                        if (index == this.projList.length - 1)
                        {
                            previousSearch.then(() =>
                            {
                                this.activityListStart = false;
                                resolve();
                            });
                        }

                    });
                })
                .catch(() =>
                {
                    this.activityListStart = false;
                    reject();
                });
        });

    }
    retrieveActivity(actNum: string): Promise<{ form: Form, activity: any }>
    {
        return new Promise((resolve, reject) =>
        {

            let filter = {
                or: 0,
                ignorecase: 1,
                QueryValues:
                    [
                        {
                            "field": "PROJACT",
                            "fromval": actNum,
                            "toval": "",
                            "op": "=",
                            "sort": 0,
                            "isdesc": 0
                        },
                    ]
            };
            let form;
            this.getForm(this.activityFormName)
                .then(formres =>
                {
                    form = formres;
                    return this.formService.setSearchFilter(form, filter);
                })
                .then(() => this.formService.getRows(form, 1))
                .then(rows => 
                {
                    let act = rows[1] ? rows[1] : undefined;
                    resolve({ form: form, activity: act });
                })
                .catch(error => reject());
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
            .catch(() => { });
    }
    updateActivity(actNumber, title, comment, status, owner)
    {
        return new Promise((resolve, reject) =>
        {
            let activityForm: Form;
            this.retrieveActivity(actNumber)
                .then(({ form, activity }) =>
                {
                    activityForm = form;
                    return activityForm.fieldUpdate("ACTDES", title)
                })
                .then(() =>
                {
                    return activityForm.fieldUpdate("PRIORITYDES", comment);
                })
                .then(() =>
                {
                    return activityForm.fieldUpdate("STEPSTATUSDES", status);
                })
                .then(() =>
                {
                    return activityForm.fieldUpdate("OWNER", owner);
                })
                .then(() =>
                {
                    return activityForm.saveRow(0);
                })
                .then(() => resolve())
                .catch(() =>
                {
                    if (activityForm)
                        this.formService.undoRow(activityForm)
                            .then(() => reject());
                    else
                        reject();
                });
        });
    }
    finishActivity(activity): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let activityForm: Form;
            this.retrieveActivity(activity.PROJACT)
                .then(({ form, activity }) =>
                {
                    activityForm = form;
                    return activityForm.fieldUpdate("STEPSTATUSDES", "בוצעה")
                })
                .then(() =>
                {
                    return activityForm.saveRow(0);
                })
                .then(() => resolve())
                .catch(() =>
                {
                    if (activityForm)
                        this.formService.undoRow(activityForm)
                            .then(() => reject());
                    else
                        reject();
                });
        });
    }
    // activity text
    getActivityText(actNum): Promise<{ text: string, activity }>
    {
        return new Promise((resolve, reject) =>
        {
            let subform;
            let act;
            this.retrieveActivity(actNum)
                .then(({ form, activity }) =>
                {
                    act = activity;
                    return this.getSubForm(this.activityTextFormName, form);
                })
                .then(subformRes =>
                {
                    subform = subformRes;
                    return this.formService.getRows(subform, 1);
                })
                .then(rows =>
                {
                    let text = "";
                    if (rows && rows["1"] != null)
                        text = rows["1"].htmltext;
                    this.formService.endForm(subform);
                    resolve({ text: text, activity: act });
                })
                .catch(() => reject());
        });
    }
    addNewActivityText(text): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let form;
            let subform;
            this.getForm(this.activityFormName)
                .then(resultForm =>
                {
                    form = resultForm;
                    return this.formService.setActiveRow(form, 1);
                })
                .then(() =>
                {
                    return this.getSubForm(this.activityTextFormName, form);
                })
                .then(subformRes =>
                {
                    subform = subformRes;
                    return this.formService.saveText(subform, text);
                })
                .then(() =>
                {
                    let text;
                    let rows = this.formService.getLocalRows(subform);
                    if (rows && rows["1"])
                        text = rows["1"].htmltext;

                    resolve(text);
                    this.formService.endForm(subform);
                })
                .catch(() => reject());
        });

    }

    //activity status
    getActivityStatuses(actStatus: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.formService.openSearchOrChoose(this.formService.getForm(this.activityFormName), "STEPSTATUSDES", actStatus)
                .then((search: Search) => resolve(search.ChooseLine))
                .catch(() => reject());
        });

    }
    /******************* Time Tracking *************/
    getCurrentTime()
    {
        let date = new Date();
        return this.getTime(date);
    }
    getTime(date: Date)
    {
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
                            "fromval": "25:00",
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
                        if (rows[1] && rows[1]['STIMEI'] != "00:00" && rows[1]['ETIMEI'] == "00:00")
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
    startActReport(actNum)
    {
        this.retrieveActivity(actNum)
            .then(({ form, activity }) =>
            {
                return this.formService.executeDirectActivation(form, "ESH_STARTWORK", "P");
            })
            .then(() =>
            {
                return this.getTodaysReports();
            })
            .catch(err =>
            {
                // this.activeTask = null;
            });
    }
    newActReport(actNum, project, date: string, hours: number)
    {

        let hoursForm: Form;
        let rowind = 0;

        this.getForm(this.hoursFormName)
            .then(form =>
            {
                hoursForm = form;
                return this.formService.newRow(hoursForm);
            })
            .then(rowInd =>
            {
                rowind = rowInd;
                return this.formService.updateField(hoursForm, rowind, "DOCNO", project);
            })
            .then(() =>
            {
                return this.formService.updateField(hoursForm, rowind, "PROJACTA", actNum);
            })
            .then(() =>
            {
                //date
                return this.formService.updateField(hoursForm, rowind, "CURDATE", date);
            })
            .then(() =>
            {
                return this.formService.updateField(hoursForm, rowind, "CQUANT", hours);

            })
            .then(() =>
            {
                return this.formService.saveRow(hoursForm, rowind, 0);
            })
            .then(() =>
            {
                return this.getTodaysReports();
            })
            .catch(err =>
            {
                // this.activeTask = null;
                if (hoursForm)
                    this.formService.undoRow(hoursForm);
            });
    }
    /////********** Projects ***************/
    getProjects()
    {
        this.projectListObsr.next(this.projList);
    }
    checkSearchCursor(searchForm: Form, search: Search): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            if (search["stack_cursor"] == 5)
                resolve(search.SearchLine);
            else if (search["stack_cursor"] == 6)//by number
            {
                this.formService.search(searchForm, search.value, SearchAction.TypeChange)
                    .then(() =>
                    {
                        return this.formService.search(searchForm, search.value, SearchAction.TypeChange);
                    })
                    .then(searchRes => resolve(searchRes.SearchLine))
                    .catch(() => reject());
            }
            else if (search["stack_cursor"] == 7) //by foreign name 
            {
                this.formService.search(searchForm, search.value, SearchAction.TypeChange)
                    .then((searchRes: Search) =>
                    {
                        resolve(searchRes.SearchLine);
                    })
                    .catch(() => reject());
            }

        });
    }
    searchProject(proj: string, isFirst: boolean): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let searchForm;
            let isCursorByName = true;
            this.getForm(this.activityFormName)
                .then(form =>
                {
                    searchForm = form;
                    if (isFirst)
                        return this.formService.openSearchOrChoose(form, "DOCNO", proj);
                    return this.formService.search(form, proj);
                })
                .then((search: Search) =>
                {
                    if (isFirst)
                    {
                        this.checkSearchCursor(searchForm, search)
                            .then(searchlines => resolve(searchlines))
                            .catch(() => reject());
                    }
                    else
                    {
                        resolve(search.SearchLine);

                    }
                })
                .catch(() => reject());
        });
    }
    clearSearch(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.getForm(this.activityFormName)
                .then(form => this.formService.undoRow(form))
                .then(() => resolve())
                .catch(() => reject());
        });
    }
    addProject(project)
    {
        this.clearSearch()
            .then(() =>
            {
                let projInd = this.projList.indexOf(project);
                if (projInd < 0)
                {
                    this.projList.push(project);
                    this.storeKeyValue(this.projectsLocalStorage, this.projList);
                    this.activityListStart = true;
                    this.activityListStartObsr.next();

                    let filter = {
                        or: 0,
                        ignorecase: 1,
                        QueryValues:
                            [
                                {
                                    "field": "DOCNO",
                                    "fromval": project.DOCNO,
                                    "toval": "",
                                    "op": "=",
                                    "sort": 0,
                                    "isdesc": 0
                                },
                                {
                                    "field": "LEVEL",
                                    "fromval": "2",
                                    "toval": "",
                                    "op": ">=",
                                    "sort": 0,
                                    "isdesc": 0
                                },
                            ]
                    };
                    let previousSearch = new Promise((innerresolve, reject) => innerresolve());
                    this.setFilterAndGetActs(filter, previousSearch)
                        .then(() =>
                        {
                            this.activityListStart = false;
                        })
                        .catch(() => { });
                }
            });
    }
    deleteProject(project)
    {
        let indexof = this.projList.indexOf(project);
        if (indexof >= 0)
        {
            this.activityListStart = true;
            this.activityListStartObsr.next();

            this.projList.splice(indexof, 1);
            this.storeKeyValue(this.projectsLocalStorage, this.projList);
            this.activityList = this.activityList.filter((value, index, arr) => value.DOCNO != project.DOCNO);
            this.activityListStart = false;
            this.activityListObsr.next(this.activityList);
        }
    }
    /////********** Todo List ***************/
    getToDOList(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let date = new Date();
            let lastMonth: string | number = date.getUTCMonth();
            lastMonth = lastMonth < 10 ? '0' + lastMonth : lastMonth + '';
            let year = date.getUTCFullYear().toString().substring(2);
            let fromDate = this.getLang() == 1 ? "01/" + lastMonth + "/" + year : lastMonth + "/01/" + year;
            fromDate = fromDate + " 00:00";

            let filter: Filter = {
                or: 0,
                ignorecase: 1,
                QueryValues: [
                    {
                        "field": "OWNERLOGIN",
                        "fromval": this.getUserName(),
                        "toval": "",
                        "op": "=",
                        "sort": 0,
                        "isdesc": 0
                    },
                    {
                        "field": "UDATE",
                        "fromval": fromDate,
                        "toval": "",
                        "op": ">",
                        "sort": 1,
                        "isdesc": 1
                    }]
            };

            let todoForm;
            this.getForm(this.todoListFormName)
                .then(form => 
                {
                    todoForm = form;
                    return this.formService.setSearchFilter(form, filter);
                })
                .then(() => this.formService.getRows(todoForm, 1))
                .then(todoRows =>
                {

                    todoRows = this.objToIterable.transform(todoRows);
                    this.todoList = todoRows;
                    this.todoListObsr.next(this.todoList);

                    // let serviceFormConfig = Forms[this.appService.serviceCallFormName];
                    // this.serviceCallsList = todoRows.filter(row => row.DOCDES == serviceFormConfig.title);

                    // let orderFormConfig = Forms[this.appService.orderFormName];
                    // this.ordersList = todoRows.filter(row => row.DOCDES == orderFormConfig.title);

                    // return this.formService.endForm(todoForm);
                })

                .then(() => resolve())
                .catch(() => { });
        });
    }
    getFollowUps()
    {
        return new Promise((resolve, reject) =>
        {
            let followupForm;
            this.getForm(this.followUpFormName)
                .then(form => 
                {
                    followupForm = form;
                    return this.formService.getRows(followupForm, 1);
                })
                .then(followupRows =>
                {
                    followupRows = this.objToArray(followupRows);
                    this.todoList = this.todoList.concat(followupRows);
                    this.todoListObsr.next(this.todoList);
                })

                .then(() => resolve())
                .catch(() => { });
        });

    }
    filterActivities(list)
    {
        if (list)
            return list.filter(row => row.DOCDES == "פעילות לפרויקט");
    }
    ///////// Sticky Notes ///////////////////
    saveStickyNotes(stickyArr: string[])
    {
        this.storage.set(this.stickynoteStorage, stickyArr);
    }
    getStickyNote()
    {
        return this.storage.get(this.stickynoteStorage);
    }

    /********************** Iteration ************** */
    getIteration()
    {
        return new Promise((resolve, reject) =>
        {

            this.getForm(this.iterationFormName, 1)
                .then(form => this.formService.startSubFormAndGetRows(form, this.iterationItemsFormName))
                .then(iterationItemsForm =>
                {
                    let iterationItems = this.objToIterable.transform(this.formService.getLocalRows(iterationItemsForm));
                    this.iterationItems = iterationItems;
                    this.iterationObsr.next(this.iterationItems);

                    // let serviceFormConfig = Forms[this.appService.serviceCallFormName];
                    // this.serviceCallsList = todoRows.filter(row => row.DOCDES == serviceFormConfig.title);

                    // let orderFormConfig = Forms[this.appService.orderFormName];
                    // this.ordersList = todoRows.filter(row => row.DOCDES == orderFormConfig.title);

                    // return this.formService.endForm(todoForm);
                })

                .then(() => resolve())
                .catch(() => { });
        });
    }
}
