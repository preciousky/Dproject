import { Component, OnInit, Input } from '@angular/core';
import { MyCard } from '../MyCard'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input() myCard :MyCard;
  
  flagTest: boolean = false;

  constructor(private router: Router) { 
  }

  ngOnInit() {
    console.log(this.myCard);
  }

  

  toReleaseRank(){
    this.router.navigate(['/toReleaseRank', this.myCard.paperId]);
  }
  toReleasePress(){
    this.router.navigate(['/toReleasePress', this.myCard.paperId]);
  }
  toReleaseDiscount(){
    this.router.navigate(['/toReleaseDiscount', this.myCard.paperId]);
  }
  toReleaseEndorse(){
    this.router.navigate(['/toReleaseEndorse', this.myCard.paperId]);
  }

}
