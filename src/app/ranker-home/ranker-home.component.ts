import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranker-home',
  templateUrl: './ranker-home.component.html',
  styleUrls: ['./ranker-home.component.css']
})
export class RankerHomeComponent implements OnInit {
  playerId: string = 'init-ranker-player-id';
  role: number;
  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.playerId = queryParams.userId;
      this.role = queryParams.role;
    });
  }

  getRankingPapers(): void {
    this.router.navigate(['/rankingPapers', this.playerId]);

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
