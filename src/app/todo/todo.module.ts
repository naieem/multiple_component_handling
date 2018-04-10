import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoServiceService } from './todo-service.service';
const todoRoutes: Routes = [
  {
    path: '',
    component: TodoContainerComponent,
    children: [
      {
        path: 'list',
        component: TodoListComponent,
        // children: [
        //   {
        //     path: 'add',
        //     component: TodoAddComponent
        //   },
        //   {
        //     path: ':id',
        //     component: TodoUpdateComponent
        //   }
        // ]
      },
      {
        path: 'add',
        component: TodoAddComponent
      },
      {
        path: 'edit/:id',
        component: TodoUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes),
    FormsModule
  ],
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodoUpdateComponent,
    TodoContainerComponent
  ],
  exports: [
    TodoListComponent,
    TodoAddComponent,
    TodoUpdateComponent,
    TodoContainerComponent
  ],
  providers: [TodoServiceService]
})
export class TodoModule { }

export const todoComponents = [
  TodoListComponent,
  TodoAddComponent,
  TodoUpdateComponent,
  TodoContainerComponent
];
