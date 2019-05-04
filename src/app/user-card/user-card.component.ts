import { Component, OnInit, Input } from '@angular/core';
import { UserCard } from '../UserCard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() userCard: UserCard;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.userCard);
  }

  toGetUserPapers(){
    this.router.navigate(['/userPapers', this.userCard.userId]);
  }

}
