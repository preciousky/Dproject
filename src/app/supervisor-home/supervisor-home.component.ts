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
  playerInfoResForm: FormGroup;
  notificationContent: string;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService,
    private router: Router) { }

  ngOnInit() {
    this.paperLogsForm = this.fb.group({
      name: [null, [Validators.required]],
      id_1: [null, [Validators.required]]
    });
    this.operationLogsForm = this.fb.group({
      role: [null, [Validators.required]],
      id_2: [null, [Validators.required]]
    });
    this.playerInfoResForm = this.fb.group({
      role: [null, [Validators.required]],
      id_3: [null, [Validators.required]]
    });
  }

  paperLogs(): void {
    for (const i in this.paperLogsForm.controls) {
      this.paperLogsForm.controls[i].markAsDirty();
      this.paperLogsForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.paperLogsForm.controls['name'].hasError('required') &&
      !this.paperLogsForm.controls['id_1'].hasError('required')
    ) {
      this.router.navigate(['paperLogs', this.paperLogsForm.value.id_1]);
    }
  }
  operationLogs(): void {
    for (const i in this.operationLogsForm.controls) {
      this.operationLogsForm.controls[i].markAsDirty();
      this.operationLogsForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.operationLogsForm.controls['role'].hasError('required') &&
      !this.operationLogsForm.controls['id_2'].hasError('required')
    ) {
      this.router.navigate(['paperLogs', this.operationLogsForm.value.id_2]);
    }
  }
  playerInfoRes(): void {
    for (const i in this.playerInfoResForm.controls) {
      this.playerInfoResForm.controls[i].markAsDirty();
      this.playerInfoResForm.controls[i].updateValueAndValidity();
    }
    if (
      !this.playerInfoResForm.controls['role'].hasError('required') &&
      !this.playerInfoResForm.controls['id_3'].hasError('required')
    ) {
      this.router.navigate(['playerInfoResponce', this.playerInfoResForm.value.id_3]);
    }

  }
  createBasicNotification(): void {
    this.notification.blank(
      '系统提示',
      this.notificationContent
    );
  }
}