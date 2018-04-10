import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;
  constructor( private router: Router) { }

  ngOnInit() {
  }
  edit(id: Number) {
    this.router.navigate(['/todo/edit/', id]);
  }

}
