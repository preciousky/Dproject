import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranker-home',
  templateUrl: './ranker-home.component.html',
  styleUrls: ['./ranker-home.component.css']
})
export class RankerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRankingPapers(): void {
    console.log('get Ranking Papers');
  }
  getApiDocs(): void {
    console.log('api doc');
  }
  getMyInfo(): void {
    console.log('player info');
  }

}
