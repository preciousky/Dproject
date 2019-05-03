import { Component } from '@angular/core';
import { ShareService } from './service/share.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DLUTProject';
  userId: string;
  logInState: boolean;
  platform: string = '用户平台';
  roleCode: number = 0;
  constructor(
    private shareService: ShareService) {
    shareService.changeEmitted$.subscribe(
      body => {
        var jsonBody = JSON.parse(body);
        console.log(jsonBody);
        console.log('roleCode: ' + jsonBody['roleCode']);
        this.roleCode = jsonBody['roleCode'];
        this.userId = jsonBody['userId'];
        if(this.roleCode == 1){
          this.platform = '用户平台';
        }
        else if(this.roleCode == 2){
          this.platform = '评级方平台';
        }
        else if(this.roleCode == 3){
          this.platform = '准入方平台';
        }
        else if(this.roleCode == 4){
          this.platform = '监管方平台';
        }
      });
  }
  ngOnInit() {
    this.logInState = false;
    this.userId = 'testUserId';
  }

  getRoleCode(roleCode: string) {
    console.log(roleCode);
  }


}
