import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';

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
  userId;
  userInfo;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.userInfo = {};
  }
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    var body = JSON.stringify({
      "userId": this.userId,
      "userName": "testName"
    });
    this.httpService.postData('user/getMyInfo', body)
      .subscribe(data => {
        this.userInfo = data;
      },
        error => {
          console.log(error);
        }
      );
  }

}
