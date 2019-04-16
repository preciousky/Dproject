import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.component.html',
  styleUrls: ['./my-business.component.css']
})
export class MyBusinessComponent implements OnInit {

  selectedNum: any;
  locationUrl: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

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
    
    console.log(businessPart);
  }

}
