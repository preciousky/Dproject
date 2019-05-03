import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCard } from '../MyCard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.component.html',
  styleUrls: ['./my-business.component.css']
})
export class MyBusinessComponent implements OnInit {
  userId: string;
  //用于从首页到本页对子页的选择
  selectedNum: number;
  //data to test myPapers cards
  //声明对象成员的时候，必须把“结构”定义出来，不然程序好像不认识
  myCards: MyCard[];
  // myCards: MyCard[] = [{
  //   paperName: "data",
  //   state: 111,
  //   paperId: "data",
  //   dDate: "data",
  //   mDate: "data",
  //   value: 111,
  //   rankInfo: 1,
  //   drawerName: "data",
  //   payerName: "data",
  //   holderName: "data",
  //   stateRole: "data",
  //   stateRoleName: "data",
  //   cashData: "data",
  // }];



  //data to test paying table
  //不初始化的话，页面回报“无法读取链表长度”的错误
  listOfPayingPapers: string[]=['init'];
  drawPaperForm: FormGroup;
  notificationContent: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.selectSubPage();
    this.userId = this.route.snapshot.queryParams["userId"];
    this.initDrawPaperForm();
    this.loadMyPapers();
    this.loadMyPayingPapers();
  }

  selectSubPage() {
    var businessPart = this.route.snapshot.paramMap.get('part');
    if (businessPart == 'papers') {
      this.selectedNum = 0;
    }
    else if (businessPart == 'drawing') {
      this.selectedNum = 1;
    }
    else if (businessPart == 'paying') {
      this.selectedNum = 2;
    }
  }
  initDrawPaperForm() {
    this.drawPaperForm = this.fb.group({
      paperName: [null, [Validators.required]],
      acceptingUserId: [null, [Validators.required]],
      value: [null, [Validators.required]],
      holdingUserId: [null, [Validators.required]],
      rule: [null, [Validators.required]],
      ruleData: [null, [Validators.required]]

    });
  }
  loadMyPapers() {
    console.log('userId: ' + this.userId);
    var body = JSON.stringify({
      "userId": this.userId
    });
    this.httpService.postData('user/myBusiness/getUserPapersById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.myCards = data['myCards'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  toDrawPaper() {
    for (const i in this.drawPaperForm.controls) {
      this.drawPaperForm.controls[i].markAsDirty();
      this.drawPaperForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.drawPaperForm.controls['paperName'].hasError('required') &&
      !this.drawPaperForm.controls['acceptingUserId'].hasError('required') &&
      !this.drawPaperForm.controls['value'].hasError('required') &&
      !this.drawPaperForm.controls['holdingUserId'].hasError('required') &&
      !this.drawPaperForm.controls['rule'].hasError('required') &&
      !this.drawPaperForm.controls['ruleData'].hasError('required')) {
      var body = JSON.stringify({
        "paperName": this.drawPaperForm.value.paperName,
        "payerId": this.drawPaperForm.value.acceptingUserId,
        "value": this.drawPaperForm.value.value,
        "payeeId": this.drawPaperForm.value.holdingUserId,
        "rule": this.drawPaperForm.value.rule,
        "ruleData": this.drawPaperForm.value.ruleData,
      });
      this.httpService.postData('user/myBusiness/drawPaper', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
            this.notificationContent = '发起出票成功';
            this.createBasicNotification();
          }
          else if (data['code'] == 2) {
            this.notificationContent = '发起出票失败,请联系准入方';
            this.createBasicNotification();
          }
          else {
            this.notificationContent = '发起出票失败,服务器未知错误';
            this.createBasicNotification();
          }
          console.log('###################### link finish ############################');
        },
          error => {
            console.log(error);
          }
        );
    }
  }
  loadMyPayingPapers(){
    var body = JSON.stringify({
      "userId": this.userId
    });
    this.httpService.postData('user/myBusiness/getMyPayingPapers', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.listOfPayingPapers = data['data'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  pay(paperId:string) {
    var body = JSON.stringify({
      "paperId": paperId
    });
    this.httpService.postData('user/myBusiness/payPaperById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '支付成功';
          this.createBasicNotification();
        }
        else if (data['code'] == 2) {
          this.notificationContent = '支付失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '支付失败,服务器未知错误';
          this.createBasicNotification();
        }
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  payFuture(paperId:string) {
    var body = JSON.stringify({
      "paperId": paperId
    });
    this.httpService.postData('user/myBusiness/payFuturePaperById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '支付成功';
          this.createBasicNotification();
        }
        else if (data['code'] == 2) {
          this.notificationContent = '支付失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '支付失败,服务器未知错误';
          this.createBasicNotification();
        }
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
  payPress(paperId:string) {
    var body = JSON.stringify({
      "paperId": paperId
    });
    this.httpService.postData('user/myBusiness/responseYesPressById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '支付成功';
          this.createBasicNotification();
        }
        else if (data['code'] == 2) {
          this.notificationContent = '支付失败,请联系准入方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '支付失败,服务器未知错误';
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
