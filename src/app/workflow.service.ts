import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WorkflowService {
    data: any[];
    constructor() {
        this.data = [
            {
                name: 'supto',
                title: 'Sofrwate'
            },
            {
                name: 'naieem',
                title: 'CTO'
            }
        ];
    }

    setData(info) {
        this.data.push(info);
    }
    getData(): Observable<any[]> {
        return of(this.data);
    }

}
