import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyBusinessComponent } from './my-business/my-business.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { LoginComponent } from './login/login.component';
import { LogupComponent } from './logup/logup.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logup',
    component: LogupComponent
  },
  {
    path: 'userInfo',
    component: UserInfoComponent
  },
  {
    path: 'myBusiness/:part',
    component: MyBusinessComponent
  },
  {
    path: 'newBusiness/:part',
    component: NewBusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
