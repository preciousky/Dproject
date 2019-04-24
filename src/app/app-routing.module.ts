import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyBusinessComponent } from './my-business/my-business.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { LoginComponent } from './login/login.component';
import { LogupComponent } from './logup/logup.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ReleaseRankComponent } from './release-rank/release-rank.component';
import { ReleaseEndorseComponent } from './release-endorse/release-endorse.component';
import { ReleaseDiscountComponent } from './release-discount/release-discount.component';
import { ReleasePressComponent } from './release-press/release-press.component';
import { ReleaseAcceptForHonourComponent } from './release-accept-for-honour/release-accept-for-honour.component';

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
    path: 'userInfo/:userId',
    component: UserInfoComponent
  },
  {
    path: 'myBusiness/:part',
    component: MyBusinessComponent
  },
  {
    path: 'newBusiness/:part',
    component: NewBusinessComponent
  },
  {
    path: 'toReleaseRank/:paperId',
    component: ReleaseRankComponent
  },
  {
    path: 'toReleaseEndorse/:paperId',
    component: ReleaseEndorseComponent
  },
  {
    path: 'toReleaseDiscount/:paperId',
    component: ReleaseDiscountComponent
  },
  {
    path: 'toReleasePress/:paperId',
    component: ReleasePressComponent
  },
  {
    path: 'toReleaseAcceptForHonour/:paperId',
    component: ReleaseAcceptForHonourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
