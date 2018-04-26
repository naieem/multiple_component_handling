import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class TodoServiceService {
  dataserviceUrl = environment.workflowService;
  constructor(private http: HttpClient) { }
  saveWorkflowConfig(info) {
    return this.http.post(this.dataserviceUrl + 'save', info);
  }
  getAllWorkflowConfig() {
      return this.http.get(this.dataserviceUrl + 'getall').pipe(
        map((result: any) => {
        return result.data;
      })
    );
  }
  getWorkflowConfigById(id: any) {
    return this.http.post(this.dataserviceUrl + 'getById', {itemId: id});
  }

  getinstanceById(id: any) {
    return this.http.post(this.dataserviceUrl + 'getInstanceById', {itemId: id});
  }
  getAllWorkFlowInstance(): Observable<any[]> {
      return this.http.get(this.dataserviceUrl + 'getallinstance').pipe(
        map((result: any) => {
        return result.data;
      })
    );
  }
}
