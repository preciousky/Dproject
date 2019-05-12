import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-access-home',
  templateUrl: './access-home.component.html',
  styleUrls: ['./access-home.component.css']
})
export class AccessHomeComponent implements OnInit {
  notificationContent: string;
  playerId: string = 'init-access-player-id';
  role: number;
  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.playerId = queryParams.userId;
      this.role = queryParams.role;
    });
  }

  getUserInfos(): void {
    this.router.navigate(['/userInfos']);
  }
  getApiDocs(): void {
    this.router.navigate(['/apiDocs']);
  }
  getMyInfo(): void {
    this.router.navigate(['/playerInfo', this.playerId], {
      queryParams: {
        role: this.role
      }
    });
  }

}
