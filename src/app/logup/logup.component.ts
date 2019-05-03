import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  logupForm: FormGroup;
  notificationContent: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService
  ) { }
  
  logup(): void {
    for (const i in this.logupForm.controls) {
      this.logupForm.controls[i].markAsDirty();
      this.logupForm.controls[i].updateValueAndValidity();
    }
    if (!this.logupForm.controls['username'].hasError('required') && !this.logupForm.controls['password'].hasError('required')) {
      var body = JSON.stringify({
        "username": this.logupForm.value.username,
        "password": this.logupForm.value.password
      });
      this.httpService.postData('logup', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
            if (data['roleCode'] == 1) {
              this.notificationContent = '您成功注册成为平台用户';
              this.createBasicNotification();
              this.router.navigate(['/home']);
            }
            else if (data['roleCode'] == 2) {
              this.notificationContent = '您成功注册成为平台评级方';
              this.createBasicNotification();
              this.router.navigate(['/home']);
            }
            else if (data['roleCode'] == 3) {
              this.notificationContent = '您成功注册成为平台准入方';
              this.createBasicNotification();
              this.router.navigate(['/home']);
            }
          }
          else if (data['code'] == 2) {
            this.notificationContent = '注册失败，请联系监管方';
            this.createBasicNotification();
          }
          else {
            this.notificationContent = '注册失败，服务器未知错误';
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

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.logupForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.logupForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  ngOnInit(): void {
    this.logupForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }
  createBasicNotification(): void {
    this.notification.blank(
      '系统提示',
      this.notificationContent
    );
  }

}
