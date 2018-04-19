import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// ======================================
// Redux related coding starts
// ======================================

// import { NgRedux, NgReduxModule } from '@angular-redux/store';
// import { IAppState, rootReducer, INITIAL_STATE } from './store';

// ======================================
// Redux related coding ends
// ======================================

import { AppRoutingModule, MainRouteComponets } from './app-routing-module/app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EntryComponents } from './entryComponents';

// ----------- all platform componets are loaded via this ------------//
import { PlatformComponentsModule, PlatformComponents } from './platform-components/platform-components.module';
import { AppComponent } from './app.component';
import { SuptoCopDirective } from './home-page/supto-cop.directive';
// import { ComponentLoaderComponent } from './component-loader/component-loader.component';
import { TodoModule } from './todo/todo.module';
import { RegistrationComponent } from './registration/registration.component';
import { DataService } from './data.service';
@NgModule({
  declarations: [
    AppComponent,
    MainRouteComponets,
    SuptoCopDirective,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PlatformComponentsModule,
    TodoModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: EntryComponents
})
export class AppModule {
 }
