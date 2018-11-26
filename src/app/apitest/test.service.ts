import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: HttpClient) {
  }

  testServiceOne() {
   return this.http.get('http://172.21.111.48:92/WSTestPass/Wsepass.asmx/GetPorts');
  }
}


