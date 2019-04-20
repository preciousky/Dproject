import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /* serverIP='111.111.111.111'; */

  constructor(private http: HttpClient) { }

  getData(url: string){
    return this.http.get(this.formatUrl(url));
  }

  formatUrl(url: string){
    return 'assets/mock/'+url+'.json';
    /* return this.serverIP+url; */
  }
}
