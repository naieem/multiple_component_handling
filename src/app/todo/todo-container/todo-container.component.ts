import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  gotoAdd() {
    this.router.navigate(['/todo/add']);
  }

}
