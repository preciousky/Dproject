import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-home',
  templateUrl: './supervisor-home.component.html',
  styleUrls: ['./supervisor-home.component.css']
})
export class SupervisorHomeComponent implements OnInit {
  paperLogsForm: FormGroup;
  operationLogsForm: FormGroup;
  operatorInfoForm: FormGroup;
  notificationContent: string;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService,
    private router: Router ) { }

  ngOnInit() {
    this.paperLogsForm = this.fb.group({
      name: [null, [Validators.required]],
      id_1: [null, [Validators.required]]
    });
    this.operationLogsForm = this.fb.group({
      role: [null, [Validators.required]],
      id_2: [null, [Validators.required]]
    });
    this.operatorInfoForm = this.fb.group({
      role: [null, [Validators.required]],
      id_3: [null, [Validators.required]]
    });
  }

  paperLogs(): void {
    for (const i in this.paperLogsForm.controls) {
      this.paperLogsForm.controls[i].markAsDirty();
      this.paperLogsForm.controls[i].updateValueAndValidity();
    }
    if (!this.paperLogsForm.controls['name'].hasError('required') && !this.paperLogsForm.controls['id_1'].hasError('required')) {
      var body = JSON.stringify({
        "name": this.paperLogsForm.value.name,
        "id": this.paperLogsForm.value.id_1
      });
      this.httpService.postData('user/userLogin', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (true) {
            this.router.navigate(['/paperLogs', this.paperLogsForm.value.id_1]);
          }
          else if (data['code'] == 2) {
            this.notificationContent = '用户不存在';
            this.createBasicNotification();
          }
          else if (data['code'] == 3) {
            this.notificationContent = '密码错误';
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
  operationLogs(): void {
    for (const i in this.operationLogsForm.controls) {
      this.operationLogsForm.controls[i].markAsDirty();
      this.operationLogsForm.controls[i].updateValueAndValidity();
    }
    if (!this.operationLogsForm.controls['role'].hasError('required') && !this.operationLogsForm.controls['id_2'].hasError('required')) {
      var body = JSON.stringify({
        "role": this.operationLogsForm.value.role,
        "id": this.operationLogsForm.value.id_2
      });
      this.httpService.postData('user/userLogin', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (true) {
            //this.router.navigate(['/XXXXXXXXXXXXXXXXX', XXXXXXXXXX]);
          }
          else if (data['code'] == 2) {
            this.notificationContent = '用户不存在';
            this.createBasicNotification();
          }
          else if (data['code'] == 3) {
            this.notificationContent = '密码错误';
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
  playerInfo(): void {
    for (const i in this.operatorInfoForm.controls) {
      this.operatorInfoForm.controls[i].markAsDirty();
      this.operatorInfoForm.controls[i].updateValueAndValidity();
    }
    if (!this.operatorInfoForm.controls['role'].hasError('required') && !this.operatorInfoForm.controls['id_3'].hasError('required')) {
      var body = JSON.stringify({
        "role": this.operatorInfoForm.value.role,
        "id": this.operatorInfoForm.value.id_3
      });
      this.httpService.postData('user/userLogin', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (true) {
            this.router.navigate(['/playerInfoResponce', this.operatorInfoForm.value.id_3]);
          }
          else if (data['code'] == 2) {
            this.notificationContent = '用户不存在';
            this.createBasicNotification();
          }
          else if (data['code'] == 3) {
            this.notificationContent = '密码错误';
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