import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';


export interface PaperInfo {
  paperName?: string,
	paperId?: string,
	value?: string,
	rankInfo?: string,
	rankerName?: string,
	rankDate?: string,
	dDate?: string,
	mDate?: string,
	drawerName?: string,
	payerName?: string,
	payeeName?: string,
	drawerId?: string,
	payerId?: string,
	payeeId?: string
}

export interface PaperLog {
  stateTime?: string,
  holderName?: string,
  holderId?: string,
  state?: string,
  stateRole?: string,
  stateRoleId?: string,
  stateRoleName?: string,
  cashDate?: string
}

@Component({
  selector: 'app-paper-logs',
  templateUrl: './paper-logs.component.html',
  styleUrls: ['./paper-logs.component.css']
})
export class PaperLogsComponent implements OnInit {
  paperId: string;
  paperInfo: PaperInfo;
  paperLogs: PaperLog[];
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paperId = this.route.snapshot.queryParams["paperId"];
    var body = JSON.stringify({
      "paperId": this.paperId
    });
    this.httpService.postData('supervisor/getPaperLogsById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.paperInfo = data;
        this.paperLogs = data['logs'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }

}
