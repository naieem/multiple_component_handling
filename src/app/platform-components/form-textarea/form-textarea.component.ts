import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkflowService } from '../../workflow.service';
@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.css']
})
export class FormTextareaComponent implements OnInit {
  @Input() data: any;
  @Output() OnChange = new EventEmitter<any>();
  textarea: any;
  constructor(private service: WorkflowService) { }

  ngOnInit() {
    this.textarea = this.data.defaultValue;
  }
  onChange(info: any) {
    this.data.defaultValue = info;
    this.service.updateData(this.data);
    console.log(this.service.getData());
  }

}
