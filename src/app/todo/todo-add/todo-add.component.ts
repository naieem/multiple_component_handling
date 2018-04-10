import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ITodo } from '../../todos';
import { ADD_TODO, NEXT_STEP, PREVIOUS_STEP } from '../../actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoModel: ITodo;
  @select() stepNumber;
  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {}

  ngOnInit() {
    this.todoModel = {
      id: 99,
      name: 'Naieem',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      isCompleted: false
    };
  }

  addInformation(todoModel: ITodo) {
    this.ngRedux.dispatch({
      type: ADD_TODO,
      todo: todoModel
    });
    this.router.navigate(['/todo/list']);
  }

  nextInformation() {
    this.ngRedux.dispatch({
      type: NEXT_STEP
    });
  }
  prevInformation() {
    this.ngRedux.dispatch({
      type: PREVIOUS_STEP
    });
  }

}
