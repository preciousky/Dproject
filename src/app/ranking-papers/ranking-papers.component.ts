import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { MyCard } from '../MyCard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking-papers',
  templateUrl: './ranking-papers.component.html',
  styleUrls: ['./ranking-papers.component.css']
})
export class RankingPapersComponent implements OnInit {
  playerId: string;
  rankingPaperCards: MyCard[];
  constructor(private httpService: HttpService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.playerId = this.route.snapshot.paramMap.get("playerId");
    console.log("I have got the playerId, it is "+this.playerId);
    var body = JSON.stringify({
      "noParas": "null"
    });
    this.httpService.postData('ranker/getRankingPapers', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.rankingPaperCards = data['cards'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
}

