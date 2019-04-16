import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {

  selectedNum :any;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    var businessPart= this.route.snapshot.paramMap.get('part');
    if ( businessPart == 'discounting'){
      this.selectedNum = 0;
    } else
    if ( businessPart == 'endorsing'){
      this.selectedNum = 1;
    } else
    if ( businessPart == 'accepting'){
      this.selectedNum = 2;
    } else
    if ( businessPart == 'acceptingForHonour'){
      this.selectedNum = 3;
    }
  }
}
