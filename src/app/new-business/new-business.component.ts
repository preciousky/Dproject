import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {
  userId: string;
  selectedNum: any;
  discountingList: string[] = ['init'];
  acceptingList: string[] = ['init'];
  acceptingForHonourList: string[] = ['init'];
  endorsingList: string[] = ['init'];
  //data to test paying table
  // list1OfData = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   }
  // ];
  // list2OfData = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   }
  // ];
  // list3OfData = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   }
  // ];
  // list4OfData = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   }
  // ];

  notificationContent: string;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.selectSubPage();
    this.userId = this.route.snapshot.queryParams["userId"];
    this.loadTables();

  }
  selectSubPage() {
    var businessPart = this.route.snapshot.paramMap.get('part');
    if (businessPart == 'discounting') {
      this.selectedNum = 0;
    }
    else if (businessPart == 'endorsing') {
      this.selectedNum = 1;
    }
    else if (businessPart == 'accepting') {
      this.selectedNum = 2;
    }
    else if (businessPart == 'acceptingForHonour') {
      this.selectedNum = 3;
    }
  }
  loadTables() {
    var body = JSON.stringify({
      "noParas": "null"
    });
    this.httpService.postData('user/newBusiness/getDiscountingPapers', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.discountingList = data['data'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
    this.httpService.postData('user/newBusiness/getEndorsingPapers', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.endorsingList = data['data'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
    this.httpService.postData('user/newBusiness/getAcceptingPapers', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.acceptingList = data['data'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
    this.httpService.postData('user/newBusiness/getAcceptingForHonourPapers', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.acceptingForHonourList = data['data'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  toDiscount(paperId:string){
    var body = JSON.stringify({
      "userId": this.userId,
      "paperId": paperId
    });
    this.httpService.postData('user/newBusiness/responseYesDiscountById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '票据贴现已经达成';
          this.createBasicNotification();
        }
        else if (data['code'] == 2) {
          this.notificationContent = '票据贴现失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '票据贴现失败,服务器未知错误';
          this.createBasicNotification();
        }
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  toEndorse(paperId:string,choose:string){
    var body = JSON.stringify({
      "paperId": paperId,
      "flag": choose
    });
    this.httpService.postData('user/newBusiness/responseEndorsingById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '背书回复已完成';
          this.createBasicNotification();
        }
        else if (data['code'] == 2) {
          this.notificationContent = '背书回复失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '背书回复失败,服务器未知错误';
          this.createBasicNotification();
        }
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  toAccept(paperId:string,choose:string){
    var body = JSON.stringify({
      "paperId": paperId,
      "flag": choose
    });
    this.httpService.postData('user/newBusiness/responseAcceptById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '承兑回复已完成';
          this.createBasicNotification();
        }
        else if (data['code'] == 2) {
          this.notificationContent = '承兑回复失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '承兑回复失败,服务器未知错误';
          this.createBasicNotification();
        }
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  toAcceptHonour(paperId:string,choose:string){
    var body = JSON.stringify({
      "paperId": paperId,
      "flag": choose
    });
    this.httpService.postData('user/newBusiness/responseAcceptForHonourById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '参与承兑回复已完成';
          this.createBasicNotification();
        }
        else if (data['code'] == 2) {
          this.notificationContent = '参与承兑回复失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '参与承兑回复失败,服务器未知错误';
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
