import { Component } from '@angular/core';
import { ShareService } from './service/share.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DLUTProject';
  userId: string;
  platform: string = '##未登录##';
  accessorIdforUser: string;
  /**
   * roleCode == 
   * 0 未登录
   * 1 用户登录
   * 2 评级方登录
   * 3 准入方登录
   * 4 监管方登录
   */
  roleCode: number = 0;
  constructor(
    private shareService: ShareService,
    private router: Router) {
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
    this.userId = 'testUserId';
  }

  getRoleCode(roleCode: string) {
    console.log(roleCode);
  }
  export(){
    this.roleCode = 0;
    this.router.navigate(['/home']);
  }

}
