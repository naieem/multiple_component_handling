import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState, rootReducer } from '../../store';
import { ITodo } from '../../todos';
import { UPDATE_TODO } from '../../actions';
import * as _ from 'lodash';
import { TodoServiceService } from '../todo-service.service';
import { FormInputComponent } from '../../platform-components/form-input/form-input.component';
import { FormTextareaComponent } from '../../platform-components/form-textarea/form-textarea.component';
import { ListWithImageComponent } from '../../platform-components/list-with-image/list-with-image.component';
@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todoModel: ITodo;
  todos: ITodo[];
  itemId: Number;
  wfModel: any;
  components: any[];
  name = 'hello world';
  @select() information;
  constructor( private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>,
    private router: Router, private service: TodoServiceService) {
      this.components = [];
    }

  ngOnInit() {
    // this.components = [FormInputComponent, FormTextareaComponent];
    this.route.params.subscribe(result => {
      this.itemId = result.id;
      this.getwfConfig(this.itemId);
      // this.getModel(this.itemId); // assigning data in model
    });
  }
  /**
   * Getting workflow configuration
   * @param obj
   */
  getwfConfig(id: any) {
    this.service.getWorkflowConfigById(id)
    .subscribe((result: any) => {
        if ( result.status) {
          this.wfModel = result.data;
          this.denormalizeComponentFromConfig();
          const data = {
            todos: [],
            lastUpdate: new Date(),
            stepNumber: 1,
            information: this.wfModel,
            newWorkflowInformation: {}
          };
          this.ngRedux.configureStore(rootReducer, data);
          console.log(this.ngRedux.getState());
        } else {
          console.log(result.data);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**
   * Denormalizing component config
   * @param obj
   */
  denormalizeComponentFromConfig() {
    this.wfModel.stepConfig.forEach(element => {
      element.components.forEach(ele => {
        this.assignComponent(ele);
      });
    });
  }
  /**
   * Assigning and store Component
   * @param obj
   */
  assignComponent(componentName: any) {
    switch (componentName.name) {
      case 'input':
        this.components.push(FormInputComponent);
        break;
      case 'list_with_image':
        this.components.push(ListWithImageComponent);
        break;
      default:
        break;
    }
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
  /**
   * updating information
   * @param obj
   */
  updateInformation(todoModel: ITodo) {
    this.ngRedux.dispatch({
      type: UPDATE_TODO,
      todo: todoModel
    });
    this.router.navigate(['/todo/list']);
  }

}
