import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSuptoCop]'
})
export class SuptoCopDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
