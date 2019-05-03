import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-release-rank',
  templateUrl: './release-rank.component.html',
  styleUrls: ['./release-rank.component.css']
})
export class ReleaseRankComponent implements OnInit {

  paperId: string;
  rankForm: FormGroup;
  notificationContent: string;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.paperId = this.route.snapshot.paramMap.get('paperId');
    this.rankForm = this.fb.group({
      rankerId: [null, [Validators.required]],
      paperId: [null, [Validators.required]],
      cashData: [null, [Validators.required]]
    });

    console.log("get parperId " + this.paperId);
  }

  releaseRank(): void {
    for (const i in this.rankForm.controls) {
      this.rankForm.controls[i].markAsDirty();
      this.rankForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.rankForm.controls['rankerId'].hasError('required') &&
      !this.rankForm.controls['paperId'].hasError('required') &&
      !this.rankForm.controls['cashData'].hasError('required')
    ) {
      var body = JSON.stringify({
        "rankerId": this.rankForm.value.rankerId,
        "paperId": this.rankForm.value.paperId,
        "cashData": this.rankForm.value.cashData
      });
      this.httpService.postData('user/myBusiness/releaseRank', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
            this.notificationContent = '申请评级成功';
            this.createBasicNotification();
          }
          else if (data['code'] == 2) {
            this.notificationContent = '申请评级失败，请联系准入方';
            this.createBasicNotification();
          }
          else{
            this.notificationContent = '申请评级失败,服务器未知错误';
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
