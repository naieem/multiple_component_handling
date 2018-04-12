import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as _ from 'lodash';

@Injectable()
export class StReduxService {
  reducer: any;
  initialState: any;
  broadcast: any = {};
  constructor() {
    if (_.isEmpty(this.initialState)) {
      console.log('your store is empty');
    }
  }
  /**
   * Configuring store
   * @param reducer<any>
   * @param initialState<any>
   */
  configureStore(reducer: any, initialState: any) {
    this.reducer = reducer;
    this.initialState = initialState;
  }
  /**
   * Reseting store
   * @param store<any>
   */
  resetStore(store: any) {
    this.initialState = store;
  }
  /**
   * Function which will return the store
   */
  getStore() {
    return this.initialState;
  }
  /**
   * Function which will reset reducer
   * @param reducer<any>
   */
  resetReducer(reducer: any) {
    this.reducer = reducer;
  }
  /**
   * dispatching an event to perform
   * {type:any,data:any}
   * @param action
   */
  dispatch(action: any) {
    this.reducer(this.initialState, action);
    this.broadcaster();
  }
  /**
   * Subscribing to get specific property
   * @param property name
   */
  getProperty(property): Observable<any> {
    return of(this.initialState ? this.initialState[property] : 'no property found with ' + property);
  }
  subscribe(property, callback): void {
    this.broadcast[property] = callback;
  }
  broadcaster(): void {
    const data = this.initialState ? this.initialState : 'no property found';
    _.forEach(this.broadcast, function(value, key) {
      setTimeout(function() {
        value(data[key]);
      }, 100);
    });
  }
}
