import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomePageComponent} from '../home-page/home-page.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'todo',
    loadChildren: 'app/todo/todo.module#TodoModule'
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule { }
export const MainRouteComponets = [NotFoundComponent, HomePageComponent, LoginComponent, RegistrationComponent];
