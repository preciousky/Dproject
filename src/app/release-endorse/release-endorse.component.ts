import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-release-endorse',
  templateUrl: './release-endorse.component.html',
  styleUrls: ['./release-endorse.component.css']
})
export class ReleaseEndorseComponent implements OnInit {

  paperId: string;
  endorseForm: FormGroup;
  notificationContent: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.paperId = this.route.snapshot.paramMap.get('paperId');
    this.endorseForm = this.fb.group({
      paperId: [null, [Validators.required]],
      endorsingUserId: [null, [Validators.required]],
      cashData: [null, [Validators.required]],
    });
  }

  endorse(): void {
    for (const i in this.endorseForm.controls) {
      this.endorseForm.controls[i].markAsDirty();
      this.endorseForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.endorseForm.controls['paperId'].hasError('required') &&
      !this.endorseForm.controls['endorsingUserId'].hasError('required') &&
      !this.endorseForm.controls['cashData'].hasError('required')
    ) {
      var body = JSON.stringify({
        "paperId": this.endorseForm.value.paperId,
        "endorsingUserId": this.endorseForm.value.endorsingUserId,
        "cashData": this.endorseForm.value.paperId,
      });
      this.httpService.postData('user/myBusiness/releaseEndorseById', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
            this.notificationContent = '申请发起背书成功';
            this.createBasicNotification();
          }
          else if (data['code'] == 2) {
            this.notificationContent = '申请发起背书失败，请联系准入方';
            this.createBasicNotification();
          }
          else{
            this.notificationContent = '申请发起背书失败,服务器未知错误';
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
