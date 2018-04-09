import { Component, OnInit, Input } from '@angular/core';
import { WorkflowService } from '../../workflow.service';
@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {
  @Input() data: any;
  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
    this.workflowService.getData().subscribe(result => {
      console.log(result);
    });
  }

}
