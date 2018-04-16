import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkflowService } from '../../workflow.service';
import { ClassSelector } from '../selected-class';
@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() data: any;
  @Output() OnChange = new EventEmitter<any>();
  input: any;
  DefaultClass: any;
  constructor(private service: WorkflowService) { }

  ngOnInit() {
    this.input = this.data.defaultValue;
    this.DefaultClass = ClassSelector(this.data.width);
  }
  OnInputChange(info: any) {
    // this.OnChange.emit(data);
    this.data.defaultValue = info;
    this.service.updateData(this.data);
    console.log(this.service.getData());
  }

}
