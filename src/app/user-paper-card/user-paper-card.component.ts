import { Component, OnInit, Input } from '@angular/core';
import { MyCard } from '../MyCard'
@Component({
  selector: 'app-user-paper-card',
  templateUrl: './user-paper-card.component.html',
  styleUrls: ['./user-paper-card.component.css']
})
export class UserPaperCardComponent implements OnInit {
  @Input() userPaperCard: MyCard;
  constructor() { }

  ngOnInit() {
  }

}
