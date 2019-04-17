import { Component, OnInit, Input } from '@angular/core';
import { MyCard } from '../MyCard'



@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input() myCard :MyCard;
  
  flagTest: boolean = false;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.myCard);
  }

}
