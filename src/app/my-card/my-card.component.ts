import { Component, OnInit, Input } from '@angular/core';
import { MyCard } from '../MyCard'
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';



@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input() myCard :MyCard;
  notificationContent: string;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private notification: NzNotificationService) { 
  }

  ngOnInit() {
    console.log(this.myCard);
  }

  

  toReleaseRank(){
    this.router.navigate(['/toReleaseRank', this.myCard.paperId]);
  }
  toReleasePress(){
    this.router.navigate(['/toReleasePress', this.myCard.paperId]);
  }
  toReleaseDiscount(){
    this.router.navigate(['/toReleaseDiscount', this.myCard.paperId]);
  }
  toReleaseEndorse(){
    this.router.navigate(['/toReleaseEndorse', this.myCard.paperId]);
  }
  toReleaseAccept(){
    var body = JSON.stringify({
      "paperId": this.myCard.paperId,
    });
    this.httpService.postData('user/myBusiness/releaseAcceptById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '申请票据承兑成功';
          this.createBasicNotification();
          this.router.navigate(['home']);
        }
        else if (data['code'] == 2) {
          this.notificationContent = '申请票据承兑失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '申请票据承兑失败,服务器未知错误';
          this.createBasicNotification();
        }
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }

  toRevokeDiscount(){
    var body = JSON.stringify({
      "paperId": this.myCard.paperId,
    });
    this.httpService.postData('user/myBusiness/revokeDiscountById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '撤回票据贴现成功';
          this.createBasicNotification();
          this.router.navigate(['home']);
        }
        else if (data['code'] == 2) {
          this.notificationContent = '撤回票据贴现失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '撤回票据贴现失败,服务器未知错误';
          this.createBasicNotification();
        }
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  createBasicNotification(): void {
    this.notification.blank(
      '系统提示',
      this.notificationContent
    );
  }
}
