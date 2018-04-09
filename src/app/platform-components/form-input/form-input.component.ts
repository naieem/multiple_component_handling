import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
