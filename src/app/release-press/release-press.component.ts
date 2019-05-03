import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-release-press',
  templateUrl: './release-press.component.html',
  styleUrls: ['./release-press.component.css']
})
export class ReleasePressComponent implements OnInit {

  paperId: string;
  pressForm: FormGroup;
  notificationContent: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.paperId = this.route.snapshot.paramMap.get('paperId');
    this.pressForm = this.fb.group({
      paperId: [null, [Validators.required]],
      cashData: [null, [Validators.required]],
      pressedId: [null, [Validators.required]],
    });

    console.log("get parperId " + this.paperId);
  }

  endorse(): void {
    for (const i in this.pressForm.controls) {
      this.pressForm.controls[i].markAsDirty();
      this.pressForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.pressForm.controls['paperId'].hasError('required') &&
      !this.pressForm.controls['cashData'].hasError('required') &&
      !this.pressForm.controls['pressedId'].hasError('required')) {
      var body = JSON.stringify({
        "paperId": this.pressForm.value.username,
        "cashData": this.pressForm.value.cashData,
        "pressedId": this.pressForm.value.pressedId,
      });
      this.httpService.postData('user/myBusiness/releasePressById', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
            this.notificationContent = '发起票据追索成功';
            this.createBasicNotification();
          }
          else if (data['code'] == 2) {
            this.notificationContent = '发起票据追索失败,请联系准入方';
            this.createBasicNotification();
          }
          else {
            this.notificationContent = '发起票据追索失败,服务器未知错误';
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
