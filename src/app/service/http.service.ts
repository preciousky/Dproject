import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { antIconConsolePrefix } from '@ant-design/icons-angular';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  serverIP='http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }
  
  postData(url: string, body: any){
    console.log('===============Link Start=====================');
    console.log('==============Data emitting===================');
    console.log(body?body:'No data emitting!');
    console.log('==============================================');
    console.log('=========Data response from server============');

    return this.http.get('assets/mock/'+url+'.json');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'text/plain'
      })
    };
    var response = this.http.post(this.serverIP+url, body, httpOptions);

    return response;
  }
}
