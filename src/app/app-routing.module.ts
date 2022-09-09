import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard/home-dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: 'home', component: HomeDashboardComponent },
    { path: 'login', component: LoginComponent }
  ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
