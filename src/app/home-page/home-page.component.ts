import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormInputComponent } from '../platform-components/form-input/form-input.component';
import { FormCheckboxComponent } from '../platform-components/form-checkbox/form-checkbox.component';
import { SuptoCopDirective } from './supto-cop.directive';
import { ISuperCop } from './ISuperCop';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  componentRef: any;
  componentLists: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.componentLists = [
      {
        componentName: FormInputComponent,
        model: 'Name'
      },
      {
        componentName: FormCheckboxComponent,
        model: 'Hello'
      }
    ];
  }

  ngOnInit() {
    this.loadComponent();
  }
  loadComponent() {
    this.componentLists.forEach(element => {
      // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(element.componentName);
      // const viewContainerRef = this.superCop.viewContainerRef;
      // viewContainerRef.clear();
      // this.componentRef = viewContainerRef.createComponent(componentFactory);
      // (<ISuperCop>this.componentRef.instance).data = {
      //   title: 'this is title 1'
      // };
    });
  }
}

export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}
