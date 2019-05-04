import { Component, OnInit, Input } from '@angular/core';
import { MyCard } from '../MyCard'
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ranking-paper-card',
  templateUrl: './ranking-paper-card.component.html',
  styleUrls: ['./ranking-paper-card.component.css']
})
export class RankingPaperCardComponent implements OnInit {

  @Input() rankingPaperCard: MyCard;
  @Input() playerId: string;
  rankForm: FormGroup;
  notificationContent: string;
  modalVisible: boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    console.log(this.rankingPaperCard);
    this.rankForm = this.fb.group({
      rankInfo: [null, [Validators.required]]
    });
  }
  startRank(){
    this.modalVisible = true;
  }

  cancel(){
    this.modalVisible = false;
  }

  acceptRank() {
    for (const i in this.rankForm.controls) {
      this.rankForm.controls[i].markAsDirty();
      this.rankForm.controls[i].updateValueAndValidity();
    }
    if (!this.rankForm.controls['rankInfo'].hasError('required')) {
      var body = JSON.stringify({
        "flag":"1",
        "rankInfo": this.rankForm.value.rankInfo,
        "paperId":this.rankingPaperCard.paperId,
        "rankerId":this.playerId
      });
      this.httpService.postData('/ranker/responseRankById', body)
        .subscribe(data => {
          console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
          console.log(data);
          if (data['code'] == 1) {
            this.notificationContent = '评级结果递交成功';
            this.createBasicNotification();
          }
          else if (data['code'] == 2) {
            this.notificationContent = '评级结果递交失败，请联系监管方';
            this.createBasicNotification();
          }
          else {
            this.notificationContent = '评级结果递交失败，服务器未知错误';
            this.createBasicNotification();
          }
          console.log('######################link finish############################');
          this.modalVisible = false;
        },
          error => {
            console.log(error);
          }
        );
    }
  }

  refuseRank() {
    var body = JSON.stringify({
      "flag":"2",
      "rankInfo":"null",
      "paperId":this.rankingPaperCard.paperId,
      "rankerId":this.playerId
    });
    this.httpService.postData('/ranker/responseRankById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        if (data['code'] == 1) {
          this.notificationContent = '已经成功拒绝评级';
          this.createBasicNotification();
          this.router.navigate(['home']);
        }
        else if (data['code'] == 2) {
          this.notificationContent = '拒绝评级失败,请联系监管方';
          this.createBasicNotification();
        }
        else {
          this.notificationContent = '拒绝评级失败,服务器未知错误';
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
