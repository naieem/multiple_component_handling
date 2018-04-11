import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EntryComponents } from '../entryComponents';
// ======================================
// Redux related coding starts
// ======================================
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from '../store';

// ======================================
// Redux related coding ends
// ======================================

import { PlatformComponentsModule } from '../platform-components/platform-components.module';
import { WorkflowService } from '../workflow.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoServiceService } from './todo-service.service';
import { ComponentLoaderComponent } from '../component-loader/component-loader.component';
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
    FormsModule,
    NgReduxModule,
    PlatformComponentsModule
  ],
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodoUpdateComponent,
    TodoContainerComponent,
    ComponentLoaderComponent
  ],
  exports: [
    TodoListComponent,
    TodoAddComponent,
    TodoUpdateComponent,
    TodoContainerComponent
  ],
  providers: [TodoServiceService, WorkflowService],
  entryComponents: EntryComponents
})
export class TodoModule {
  // constructor (ngRedux: NgRedux<IAppState>) {
  //   // ngRedux.configureStore(rootReducer, INITIAL_STATE);
  // }
 }

export const todoComponents = [
  TodoListComponent,
  TodoAddComponent,
  TodoUpdateComponent,
  TodoContainerComponent
];
