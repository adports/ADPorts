import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    private data;

    constructor(public http: HttpClient) {
    }
    newRegistration(data) {
        let headers: HttpHeaders = new HttpHeaders();
        console.log(this.data);
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/SubmitUserRegistration', {data}, {headers});
    }
}
