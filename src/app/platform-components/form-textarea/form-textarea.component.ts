import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkflowService } from '../../workflow.service';
import { ClassSelector } from '../selected-class';
@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.css']
})
export class FormTextareaComponent implements OnInit {
  @Input() data: any;
  @Output() OnChange = new EventEmitter<any>();
  textarea: any;
  DefaultClass: any;
  constructor(private service: WorkflowService) { }

  ngOnInit() {
    this.textarea = this.data.defaultValue;
    this.DefaultClass = ClassSelector(this.data.width);
  }
  onChange(info: any) {
    this.data.defaultValue = info;
    this.service.updateData(this.data);
    console.log(this.service.getData());
  }

}
