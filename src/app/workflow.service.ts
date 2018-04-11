import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppState } from './store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WorkflowService {
    data: any;
    constructor() {
        this.data = {};
    }

    setData(info) {
        this.data[info.model] = info.value;
    }
    // getData(): Observable<any[]> {
    //     return of(this.data);
    // }
    getData(): any[] {
        return this.data;
    }
    updateData(info: any): any {
        this.data[info.model] = info.defaultValue;
    }
}
