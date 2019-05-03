import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogupComponent } from './logup/logup.component';
import { MyBusinessComponent } from './my-business/my-business.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { UserInfoComponent } from './user-info/user-info.component';
import { MyCardComponent } from './my-card/my-card.component';
import { ReleaseRankComponent } from './release-rank/release-rank.component';
import { ReleaseEndorseComponent } from './release-endorse/release-endorse.component';
import { ReleaseDiscountComponent } from './release-discount/release-discount.component';
import { ReleasePressComponent } from './release-press/release-press.component';
import { ReleaseAcceptForHonourComponent } from './release-accept-for-honour/release-accept-for-honour.component';
import { ShareService } from './service/share.service';
import { RankerHomeComponent } from './ranker-home/ranker-home.component';
import { AccessHomeComponent } from './access-home/access-home.component';
import { SupervisorHomeComponent } from './supervisor-home/supervisor-home.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { RankingPapersComponent } from './ranking-papers/ranking-papers.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { UserPapersComponent } from './user-papers/user-papers.component';
import { ApiDocsComponent } from './api-docs/api-docs.component';
import { PlayerInfoResponceComponent } from './player-info-responce/player-info-responce.component';
import { PaperLogsComponent } from './paper-logs/paper-logs.component'

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogupComponent,
    MyBusinessComponent,
    NewBusinessComponent,
    UserInfoComponent,
    MyCardComponent,
    ReleaseRankComponent,
    ReleaseEndorseComponent,
    ReleaseDiscountComponent,
    ReleasePressComponent,
    ReleaseAcceptForHonourComponent,
    RankerHomeComponent,
    AccessHomeComponent,
    SupervisorHomeComponent,
    PlayerInfoComponent,
    RankingPapersComponent,
    UserInfosComponent,
    UserPapersComponent,
    ApiDocsComponent,
    PlayerInfoResponceComponent,
    PaperLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
