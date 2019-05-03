import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranker-home',
  templateUrl: './ranker-home.component.html',
  styleUrls: ['./ranker-home.component.css']
})
export class RankerHomeComponent implements OnInit {
  playerId: string = 'init-ranker-player-id';
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  getRankingPapers(): void {
    this.router.navigate(['/rankingPapers']);
  }
  getApiDocs(): void {
    this.router.navigate(['/apiDocs']);
  }
  getMyInfo(): void {
    this.router.navigate(['/playerInfo', this.playerId]);
  }

}
