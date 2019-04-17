import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyCardComponent } from '../my-card/my-card.component';
import { MyCard } from '../MyCard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.component.html',
  styleUrls: ['./my-business.component.css']
})
export class MyBusinessComponent implements OnInit {

  //用于从首页到本页对子页的选择
  selectedNum: any;
  //声明对象成员的时候，必须把“结构”定义出来，不然程序好像不认识
  myCard: MyCard = {
    paperName: "data",
    state: 111,
    paperId: "data",
    dDate: "data",
    mDate: "data",
    value: 111,
    rankInfo: 1,
    drawerName: "data",
    payerName: "data",
    holderName: "data",
    stateRole: "data",
    stateRoleName: "data",
    cashData: "data",
  };

  validateForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { 
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  ngOnInit() {
    this.selectSubPage();
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  selectSubPage() {
    var businessPart= this.route.snapshot.paramMap.get('part');
    if ( businessPart == 'papers'){
      this.selectedNum = 0;
    } else
    if ( businessPart == 'drawing'){
      this.selectedNum = 1;
    } else
    if ( businessPart == 'paying'){
      this.selectedNum = 2;
    }
  }
}
