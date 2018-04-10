import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { TodoServiceService } from '../todo-service.service';
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
  todo: any;
  constructor( private ngRedux: NgRedux<IAppState>, private router: Router, private service: TodoServiceService) { }

  ngOnInit() {
    this.service.getAllWorkflowConfig()
    .subscribe((result: any) => {
        if ( result.status) {
          this.todo = result.data;
        } else {
          console.log(result.data);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  edit(id: any) {
    this.router.navigate(['/todo/edit/', id]);
  }

}
