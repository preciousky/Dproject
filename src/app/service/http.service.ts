import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  serverIP='http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }
  
  postData(url: string, body: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'text/plain'
      })
    };
    var response = this.http.post(this.URL(url), body, httpOptions);

    return response;
  }

  URL(url: string){
    //return 'assets/mock/'+url+'.json';
    return this.serverIP+url;
  }
}
