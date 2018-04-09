import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, MainRouteComponets } from './app-routing-module/app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryComponents } from './entryComponents';

// ----------- all platform componets are loaded via this ------------//
import { PlatformComponentsModule, PlatformComponents } from './platform-components/platform-components.module';
import { AppComponent } from './app.component';
import { SuptoCopDirective } from './home-page/supto-cop.directive';
import { FormInputComponent } from './platform-components/form-input/form-input.component';
@NgModule({
  declarations: [
    AppComponent,
    MainRouteComponets,
    SuptoCopDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PlatformComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: EntryComponents,
})
export class AppModule { }
