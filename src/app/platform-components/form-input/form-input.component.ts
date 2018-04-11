import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() data: any;
  @Output() OnChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  OnInputChange(data: any) {
    this.OnChange.emit(data);
  }

}
