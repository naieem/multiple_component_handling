import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
