import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { MyCard } from '../MyCard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-papers',
  templateUrl: './user-papers.component.html',
  styleUrls: ['./user-papers.component.css']
})
export class UserPapersComponent implements OnInit {
  userId: string;
  userPaperCards: MyCard[];
  constructor(private httpService: HttpService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("userId");
    console.log("I have got the userId, it is "+this.userId);
    var body = JSON.stringify({
      "userId": this.userId
    });
    this.httpService.postData('access/getUserPapersById', body)
      .subscribe(data => {
        console.log('>>>>>>>>>>>>  received data >>>>>>>>>>>>>>>>>>>');
        console.log(data);
        this.userPaperCards = data['cards'];
        console.log('######################link finish############################');
      },
        error => {
          console.log(error);
        }
      );
  }
}
