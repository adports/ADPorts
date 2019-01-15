import { Component, OnInit } from '@angular/core';
import {ServicesProvider} from '../apitest/test.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
    providers: [ ServicesProvider]
})
export class ForgotPasswordPage implements OnInit {
  reset;
    strLoginId = '';
    strEmail = '';
  constructor(private GetService: ServicesProvider) { }

  ngOnInit() {
  }
    ResetPassword() {
    alert('here')
    const reset =  'strLoginId=' + this.strLoginId + '&strEmail=' + this.strEmail
        alert(reset);
        this.GetService.ResetPasswordService(reset).subscribe((res) => {
            this.reset = res;
            console.log(this.reset);
            // this.strPorts = this.Ports[0].DESCRIPTION;
        });
    }

}
