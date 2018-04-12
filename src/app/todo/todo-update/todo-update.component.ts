import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState, rootReducer } from '../../store';
import { ITodo } from '../../todos';
import { UPDATE_TODO } from '../../actions';
import * as _ from 'lodash';
import { TodoServiceService } from '../todo-service.service';
import { StReduxService } from '../../st-redux/st-redux.service';
// ======================================
// form fields components
// ======================================
import { FormInputComponent } from '../../platform-components/form-input/form-input.component';
import { FormTextareaComponent } from '../../platform-components/form-textarea/form-textarea.component';
import { ListWithImageComponent } from '../../platform-components/list-with-image/list-with-image.component';
import { FileUploadComponent } from '../../platform-components/file-upload/file-upload.component';
import { FormCheckboxComponent } from '../../platform-components/form-checkbox/form-checkbox.component';
import { FormDatepickerComponent } from '../../platform-components/form-datepicker/form-datepicker.component';
import { FormRadioComponent } from '../../platform-components/form-radio/form-radio.component';
import { FormSwitchComponent } from '../../platform-components/form-switch/form-switch.component';
import { ListWithTextComponent } from '../../platform-components/list-with-text/list-with-text.component';
import { RangeComponent } from '../../platform-components/range/range.component';

// ======================================
// form fields components ends
// ======================================

import { WorkflowService } from '../../workflow.service';
@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit, OnDestroy {
  todoModel: ITodo;
  todos: ITodo[];
  itemId: Number;
  wfModel: any;
  components: any[];
  name = 'hello world';
  stepNumber = 1;
  STEPS: any;
  @select() information;
  constructor( private stRedux: StReduxService,
    private workflowService: WorkflowService, private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>,
    private router: Router, private service: TodoServiceService) {
      this.STEPS = [];
      // ======================================
      // subscribing for properties
      // ======================================
      this.stRedux.subscribe('stepNumber', (result: any) => {
        this.stepNumber = result;
      });
    }

  ngOnInit() {
    this.components = [];
    this.route.params.subscribe(result => {
      this.itemId = result.id;
      this.getwfConfig(this.itemId);
    });
  }
  ngOnDestroy() {
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
          // configuring steps
          this.stRedux.configureStore(rootReducer, data);
          // console.log(this.stRedux.getStore());
          // this.ngRedux.configureStore(rootReducer, data);
          // console.log(this.ngRedux.getState());
        } else {
          console.log(result.data);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  nextStep() {
    this.stRedux.dispatch({
      type: 'ADD_TODO',
      data: {
        name: 'hello',
        type: 'world'
      }
    });
  }
  prevStep(): void {
    this.stRedux.dispatch({
      type: 'PREVIOUS_STEP',
      data: {
        name: 'hello',
        type: 'world'
      }
    });
    console.log(this.stRedux.getStore());
  }
  /**
   * Denormalizing component config
   * @param obj
   */
  denormalizeComponentFromConfig() {
    this.wfModel.stepConfig.forEach((step, stepIndex) => {
      const components = [];
      step.components.forEach((component, componentIndex) => {
        const obj: any = {};
        component.stepIndex = stepIndex;
        component.componentIndex = componentIndex;
        obj.model = component.model; // model is needed because to assign
        obj.value = component.defaultValue; // this value will be save as key=>value pair with model
        // sending data to service for saving settings configuration
        this.workflowService.setData(obj);
        // assigning components for rendering in front end
        components.push(this.assignComponent(component));
      });
      this.STEPS[step.order] = components; // steps configuration goes here
      // this.STEPS.splice(0, 1);
    });
  }
  /**
   * Assigning and store Component
   * @param obj
   */
  assignComponent(component: any) {
    switch (component.type) {
      case 'text':
        component.component = FormInputComponent;
        return component;
        // this.components.push(component);
        // break;
      case 'list_with_image':
        component.component = ListWithImageComponent;
        this.components.push(component);
        break;
      case 'textarea':
        component.component = FormTextareaComponent;
        return component;
        // this.components.push(component);
        // break;
      case 'list_with_text':
        component.component = ListWithTextComponent;
        this.components.push(component);
        break;
       case 'range':
        component.component = RangeComponent;
        this.components.push(component);
        break;
      case 'checkbox':
        component.component = FormCheckboxComponent;
        this.components.push(component);
        break;
      case 'radio':
        component.component = FormRadioComponent;
        this.components.push(component);
        break;
      case 'datepicker':
        component.component = FormDatepickerComponent;
        this.components.push(component);
        break;
      case 'switch':
        component.component = FormSwitchComponent;
        this.components.push(component);
        break;
      case 'file':
        component.component = FileUploadComponent;
        this.components.push(component);
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
  /**
   * Saving settings information
   * @param obj
   */
  submitConfig() {
    const store = this.stRedux.getStore();
    store.instanceinformation = this.workflowService.getData();
    this.workflowService.updateWorkflowConfig(store).subscribe((result) => {
    });
  }

}
