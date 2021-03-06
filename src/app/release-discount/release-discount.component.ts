import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-release-discount',
  templateUrl: './release-discount.component.html',
  styleUrls: ['./release-discount.component.css']
})
export class ReleaseDiscountComponent implements OnInit {

  paperId: string;
  discountForm: FormGroup;
  notificationContent: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.paperId = this.route.snapshot.paramMap.get('paperId');
    this.discountForm = this.fb.group({
      paperId: [null, [Validators.required]],
      cashData: [null, [Validators.required]],
    });

    console.log("get parperId " + this.paperId);
  }

  discount(): void {
    for (const i in this.discountForm.controls) {
      this.discountForm.controls[i].markAsDirty();
      this.discountForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.discountForm.controls['paperId'].hasError('required') &&
      !this.discountForm.controls['cashData'].hasError('required')) {
      var body = JSON.stringify({
        "paperId": this.discountForm.value.paperId,
        "cashData": this.discountForm.value.cashData,
      });
      this.httpService.postData('user/myBusiness/releaseDiscountById', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
            this.notificationContent = '申请贴现成功';
            this.createBasicNotification();
          }
          else if (data['code'] == 2) {
            this.notificationContent = '申请贴现失败，请联系准入方';
            this.createBasicNotification();
          }
          else {
            this.notificationContent = '申请贴现失败,服务器未知错误';
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
