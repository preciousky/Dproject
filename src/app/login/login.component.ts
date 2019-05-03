import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../service/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  notificationContent: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService,
    private shareService: ShareService) { }
  login(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (!this.loginForm.controls['username'].hasError('required') && !this.loginForm.controls['password'].hasError('required')) {
      var body = JSON.stringify({
        "username": this.loginForm.value.username,
        "password": this.loginForm.value.password
      });
      this.httpService.postData('login', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          var emitBody = JSON.stringify({
            "roleCode": data['roleCode'],
            "userId": data['userId']
          });
          if (data['code'] == 1) {
            if (data['roleCode'] == 1) {
              this.shareService.emitChange(emitBody);
              this.router.navigate(['/home']);
            }
            else if (data['roleCode'] == 2) {
              this.shareService.emitChange(emitBody);
              this.router.navigate(['/rankerHome']);
            }
            else if (data['roleCode'] == 3) {
              this.shareService.emitChange(emitBody);
              this.router.navigate(['/accessHome']);
            }
            else if (data['roleCode'] == 4) {
              this.shareService.emitChange(emitBody);
              this.router.navigate(['/supervisorHome']);
            }
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
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  createBasicNotification(): void {
    this.notification.blank(
      '系统提示',
      this.notificationContent
    );
  }
}
