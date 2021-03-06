import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class TodoServiceService {
  dataserviceUrl = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }
  saveWorkflowConfig(info) {
    return this.http.post(this.dataserviceUrl + 'save', info);
  }
  getAllWorkflowConfig() {
    return this.http.get(this.dataserviceUrl + 'getall');
  }
  getWorkflowConfigById(id: any) {
    return this.http.post(this.dataserviceUrl + 'getById', {itemId: id});
  }

  getinstanceById(id: any) {
    return this.http.post(this.dataserviceUrl + 'getInstanceById', {itemId: id});
  }
  getAllWorkFlowInstance() {
    return this.http.get(this.dataserviceUrl + 'getallinstance');
  }
}
