import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodoServiceService } from '../todo-service.service';
import { IAppState } from '../../store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todo: Observable<any[]>;
  CurrentGames: Observable<any[]>;
  constructor( private router: Router, private service: TodoServiceService) {}

  ngOnInit() {
    this.CurrentGames  = this.service.getAllWorkFlowInstance();
    this.todo = this.service.getAllWorkflowConfig();
  }
  add(id: any) {
    this.router.navigate(['/todo', id, 'new']);
  }
  edit(id: any) {
    this.router.navigate(['/todo', id, 'edit']);
  }

}
