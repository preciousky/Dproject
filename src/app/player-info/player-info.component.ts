import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';


export interface PlayerInfo {
  role?: string;
  logupDate?: string;
  playerName?: string;
  playerId?: string;
  tel?: string;
  email?: String;
  address?: string;
}

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  playerId: string;
  playerInfo: PlayerInfo;
  role: number;
  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.playerInfo = {};
  }

  ngOnInit() {
    this.playerId = this.route.snapshot.paramMap.get('playerId');
    this.route.queryParams.subscribe(queryParams => {
      this.role = queryParams.role;
    });
    console.log("I have got the player ID, it is " + this.playerId)
    var body = JSON.stringify({
      "playerId": this.playerId,
      "role": this.role
    });
    this.httpService.postData('/getPlayerInfoById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.playerInfo = data;
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
}
