import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username = '' ;
    password = '';
    login;
    isValid;
constructor(public http: HttpClient, private router: Router) {
}
ngOnInit() {
    this.validateUsers();
    }
    openAboutPage() {
    alert('prithvi');
        this.router.navigate(['/about']);
    }
validateUsers() {
        const users = 'username=' + this.username + '&password=' + this.password ;
        if(users) {
            this.isValid = false;
        }
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://172.21.111.48:92/WSTestPass/WSePass.asmx/ValidateUser', users , {headers})
            .subscribe(
                data => {
                    console.log(data);
                    // @ts-ignore
                    console.log(data.Valid);
                    // @ts-ignore
                    this.login = data.Valid;
                    if (this.login === true) {
                       return this.router.navigate(['/createpass']);
                    } else {
                        alert('false');
                    }
                    },
                err => {
                    console.log('ERROR!: ', err);
                }
            );

        // // this.itemApi.validateUsers(userData).subscribe((res) => {
        // //     this.data = res;
        // //     alert(this.data);
        // // });
        // const URL = 'http://172.21.111.48:92/WSTestPass/WSePass.asmx/ValidateUser?';
        // // const postData = new FormData()
        // // postData.append('key', 'value');
        // alert(URL);
        // const headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
        //     'Access-Control-Allow-Headers': 'Authorization, Lang',
        //
        // };
        // alert(headers['Content-Type']);
        // alert(this.username + this.password);
        // // const userData = {'username': 'xavier.fernando',
        // //     'password': 'praveen' };
        // // @ts-ignore
        // // this.data = this.http.get(URL + 'username=' + this.username + '&password=' + this.password, headers);
        // this.data = this.http.post(URL + 'username=' + this.username + '&password=' + this.password, headers);
        // console.log(this.data);
        // this.data.subscribe(data => {
        //     console.log(data);
        // });
    }
}
