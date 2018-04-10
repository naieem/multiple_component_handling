import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ITodo } from '../../todos';
import { UPDATE_TODO } from '../../actions';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todoModel: ITodo;
  todos: ITodo[];
  itemId: Number;
  constructor( private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(result => {
      this.itemId = result.id;
      this.getModel(this.itemId); // assigning data in model
    });
  }
  /**
   * Assigning the data in the model
   * @param obj
   */
  getModel(itemId) {
    const id = parseInt(itemId, 10);
    this.todos = this.ngRedux.getState().todos;
    this.todoModel = _.find(this.todos, function(o) {
      return o.id === id;
    });
  }
  updateInformation(todoModel: ITodo) {
    this.ngRedux.dispatch({
      type: UPDATE_TODO,
      todo: todoModel
    });
    this.router.navigate(['/todo/list']);
  }

}
