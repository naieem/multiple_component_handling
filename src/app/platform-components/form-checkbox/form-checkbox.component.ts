import { Component, OnInit, Input } from '@angular/core';
import { WorkflowService } from '../../workflow.service';
import { ClassSelector } from '../selected-class';
@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {
  @Input() data: any;
  checkbox: any;
  DefaultClass: any;
  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
    this.checkbox = this.data.DefaultCheckboxValue;
    this.DefaultClass = ClassSelector(this.data.width);
  }
  OnChange() {
    this.data.DefaultCheckboxValue = this.checkbox;
    this.workflowService.updateData(this.data);
  }
}
