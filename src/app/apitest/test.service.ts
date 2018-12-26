import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CreatePassPage} from '../create-pass/create-pass.page';



/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
    hostname1;





  constructor(public http: HttpClient) {
  }
// GET PORTS
  testServiceOne() {
   return this.http.get('http://172.21.111.48:92/WSTestPass/Wsepass.asmx/GetPorts');
  }
// NATIONALITIES
  NationalitiesService() {
      return this.http.get('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetNationalitiesEng');
  }
// HOST NAME
  HostNameService() {
        return this.http.get('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetHostCompanies');
}
// HOST DEPARTMENT
    HostDepartmentService(strHostCompany) {
        this.hostname1 = 'HostCompany=' + strHostCompany;
        console.log(this.hostname1);
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetHostDepartments', this.hostname1  , { headers});
    }

// HOST DEPARTMENT
    HostPersonService(strHostCompany , strHostDepartment ) {
        const person = 'HostCompany=' + strHostCompany + '&HostDepartment=' + strHostDepartment
        console.log(person);
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetHostPersons', person  , { headers});
    }
}


