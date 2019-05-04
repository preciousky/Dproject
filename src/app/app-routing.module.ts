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
import { AccessHomeComponent } from './access-home/access-home.component';
import { RankerHomeComponent } from './ranker-home/ranker-home.component';
import { SupervisorHomeComponent } from './supervisor-home/supervisor-home.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { RankingPapersComponent } from './ranking-papers/ranking-papers.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { UserPapersComponent } from './user-papers/user-papers.component';
import { ApiDocsComponent } from './api-docs/api-docs.component';
import { PlayerInfoResponceComponent } from './player-info-responce/player-info-responce.component'
import { PaperLogsComponent } from './paper-logs/paper-logs.component'

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
    path: 'userInfos',
    component: UserInfosComponent
  },
  {
    path: 'apiDocs',
    component: ApiDocsComponent
  },
  {
    path: 'playerInfo/:playerId',
    component: PlayerInfoComponent
  },
  {
    path: 'playerInfoResponce/:playerId',
    component: PlayerInfoResponceComponent
  },
  {
    path: 'rankingPapers/:playerId',
    component: RankingPapersComponent
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
  },
  {
    path: 'rankerHome',
    component: RankerHomeComponent
  },
  {
    path: 'accessHome',
    component: AccessHomeComponent
  },
  {
    path: 'supervisorHome',
    component: SupervisorHomeComponent
  },
  {
    path: 'userPapers/:userId',
    component: UserPapersComponent
  },
  {
    path: 'paperLogs/:paperId',
    component: PaperLogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
