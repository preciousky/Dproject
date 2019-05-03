import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';


@Component({
  selector: 'app-release-accept-for-honour',
  templateUrl: './release-accept-for-honour.component.html',
  styleUrls: ['./release-accept-for-honour.component.css']
})
export class ReleaseAcceptForHonourComponent implements OnInit {

  paperId: string;
  acceptForHonourForm: FormGroup;
  notificationContent: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.paperId = this.route.snapshot.paramMap.get('paperId');
    this.acceptForHonourForm = this.fb.group({
      paperId: [null, [Validators.required]],
      acceptingForHonourUserId: [null, [Validators.required]],
      cashData: [null, [Validators.required]],
    });

    console.log("get parperId " + this.paperId);
  }

  acceptForHonour(): void {
    for (const i in this.acceptForHonourForm.controls) {
      this.acceptForHonourForm.controls[i].markAsDirty();
      this.acceptForHonourForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.acceptForHonourForm.controls['paperId'].hasError('required') &&
      !this.acceptForHonourForm.controls['acceptingForHonourUserId'].hasError('required') &&
      !this.acceptForHonourForm.controls['cashData'].hasError('required')
    ) {
      var body = JSON.stringify({
        "paperId": this.acceptForHonourForm.value.paperId,
        "acceptingForHonourUserId": this.acceptForHonourForm.value.acceptingForHonourUserId,
        "cashData": this.acceptForHonourForm.value.cashData,
      });
      this.httpService.postData('user/newBusiness/releaseAcceptForHonourById', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
            this.notificationContent = '申请参与承兑成功';
            this.createBasicNotification();
          }
          else if (data['code'] == 2) {
            this.notificationContent = '申请参与承兑失败,请联系准入方';
            this.createBasicNotification();
          }
          else {
            this.notificationContent = '申请参与承兑失败,服务器未知错误';
            this.createBasicNotification();
          }
          console.log('######################link finish############################');
        },
          error => {
            console.log(error);
          }
        );
    }
  }
  createBasicNotification(): void {
    this.notification.blank(
      '系统提示',
      this.notificationContent
    );
  }

}
