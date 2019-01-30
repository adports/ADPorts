import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
    hostname1;
    strStartDate = '14/01/2018';
    strEndDate = '15/12/2018';
    strUser = 'emirate';
constructor(public http: HttpClient) {
  }
// Reset Password
    ResetPasswordService(reset) {
      alert(reset)
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
     return this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/ResetPassword', reset, {headers});
    }
  // PASSTYPE SERVICE
    GetPassType() {
      return this.http.get('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetPassTypesOnline');
    }
// GET PORTS
  testServiceOne() {
   return this.http.get('http://172.21.111.48:92/WSTestPass/Wsepass.asmx/GetPorts');
  }
// GET ID TYPE
 GetIDService() {
      return this.http.get('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetIdTypes');
 }
// NATIONALITIES
  NationalitiesService() {
      return this.http.get('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetNationalitiesEng');
  }
// GET VEHICLE
  GetVehService() {
      return this.http.get('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetVehReg');
  }
  // GET VEHICLE PLATE CODE
  GetVehPlateService(strVehReg) {
      const plate = 'vehreg=' + strVehReg;
      console.log(plate);
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetPlateCodes', plate, {headers});
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
// Create Pass
    CreatePassService(submitPass) {
        const Pass = submitPass;
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/SubmitPassData', Pass, {headers});
    }

    PassList() {
        const list = 'strStartDate=' + this.strStartDate + '&strEndDate=' + this.strEndDate + '&strUser=' + this.strUser
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/GetOnlinePassListByUserNotPrinted', list, {headers});
    }

    FeedBackService(feedback) {
        const feedbacks = feedback;
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/SubmitFeedBack', feedbacks, {headers});
    }

}


