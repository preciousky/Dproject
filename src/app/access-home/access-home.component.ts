import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-home',
  templateUrl: './access-home.component.html',
  styleUrls: ['./access-home.component.css']
})
export class AccessHomeComponent implements OnInit {
  notificationContent: string;
  playerId: string = 'init-access-player-id';
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  getUserInfos(): void {
    this.router.navigate(['/userInfos']);
  }
  getApiDocs(): void {
    this.router.navigate(['/apiDocs']);
  }
  getMyInfo(): void {
    this.router.navigate(['/playerInfo', this.playerId]);
  }

}
