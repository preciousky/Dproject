import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DLUTProject';
  userId: string;
  logInState: boolean;
  ngOnInit() {
    this.logInState = false;
    this.userId = 'testUserId';
  }

  getRoleCode(roleCode: string){
    console.log(roleCode);
  }
}
