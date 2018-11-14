import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
  posts: any;
  constructor(public http: HttpClient) {
    this.posts = [];
 
    
  }

  testServiceOne() {
   return this.http.get('https://epass.adports.ae/WsePass/Wsepass.asmx/GetPorts')
  }
}
