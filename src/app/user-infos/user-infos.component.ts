import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { UserCard } from '../UserCard';


@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {
  userCards: UserCard[];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    var body = JSON.stringify({
      "noParas": "null"
    });
    this.httpService.postData('access/getUserInfos', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.userCards = data['userInfos'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }

}
