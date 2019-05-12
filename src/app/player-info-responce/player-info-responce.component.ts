import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';


declare var $: any;

export interface PlayerInfoRes {
  role?: string;
	logupDate?: string;
	playerName?: string;
	playerId?: string;
	tel?: string;
	email?: String;
  address?: string;
  break_date?: string;
}

@Component({
  selector: 'app-player-info-responce',
  templateUrl: './player-info-responce.component.html',
  styleUrls: ['./player-info-responce.component.css']
})
export class PlayerInfoResponceComponent implements OnInit {
  playerId: string;
  playerInfoRes: PlayerInfoRes;
  role: number;
  constructor(private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router) {
    this.playerInfoRes = {};
  }

  ngOnInit() {
    this.playerId = this.route.snapshot.paramMap.get('playerId');
    this.route.queryParams.subscribe(queryParams => {
      this.role = queryParams.role;
    });
    
    console.log("I have got the player ID, it is "+ this.playerId)
    var body = JSON.stringify({
      "playerId": this.playerId,
      "role": this.role
    });
    this.httpService.postData('supervisor/getPlayerInfoResById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.playerInfoRes = data;
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }

}
