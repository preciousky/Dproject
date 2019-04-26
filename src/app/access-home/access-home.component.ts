import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-access-home',
  templateUrl: './access-home.component.html',
  styleUrls: ['./access-home.component.css']
})
export class AccessHomeComponent implements OnInit {
  notificationContent: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getUserInfos(): void {
    console.log('users infos');
  }
  getApiDocs(): void {
    console.log('api doc');
  }
  getMyInfo(): void {
    console.log('player info');
  }
  
}
