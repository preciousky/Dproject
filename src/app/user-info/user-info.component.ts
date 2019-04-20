import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

export interface UserInfo {
  name?: string;
  id?: string;
  enroll_date?: string;
  total_value?: string;
  rank?: string;
  account?: string;
  tel?: string;
  email?: string;
  address?: string;
} 

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  //userInfo: UserInfo;
  userInfo;

  constructor(private httpService: HttpService) {
    this.userInfo = {};
  }

  ngOnInit() {
    this.httpService.getData('user/getMyInfo')
      .subscribe(data => {
        this.userInfo = data;
        console.log(this.userInfo);
      });
  }

}
