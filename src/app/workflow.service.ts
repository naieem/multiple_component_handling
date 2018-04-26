import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppState } from './store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { StReduxService } from './st-redux/st-redux.service';
import { environment } from '../environments/environment';
import * as _ from 'lodash';
@Injectable()
export class WorkflowService {
    data: any;
    store: any;
    dataserviceUrl = environment.workflowService;
    constructor(private stRedux: StReduxService, private http: HttpClient) {
        this.data = {};
        this.store = this.stRedux.getStore();
    }

    setData(info) {
        this.data[info.model] = info.value;
    }
    private updateReduxStore(info: any) {
        this.store = this.stRedux.getStore();
        console.log(this.store);
        // this.store.information.stepConfig[info.stepIndex].components[info.componentIndex] = info;
        //
    }
    // getData(): Observable<any[]> {
    //     return of(this.data);
    // }
    getData(): any[] {
        return this.data;
    }
    updateData(info: any): any {
        if (info.c_type !== 'checkbox') {
            this.data[info.model] = info.defaultValue;
        } else if (info.c_type === 'checkbox') {
            this.data[info.model] = info.DefaultCheckboxValue;
        }
        this.updateReduxStore(info);
    }

    // ======================================
    // Data saving functions block
    // ======================================
    updateWorkflowConfig(info) {
        return this.http.post(this.dataserviceUrl + 'updateSettings', info);
    }
    /**
     * creating new workflowinstance and new advertisement
     * @param obj
     */
    saveWorkflowConfig(info) {
        return this.http.post(this.dataserviceUrl + 'saveSettings', info);
    }
}
