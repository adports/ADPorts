import { Component, OnInit } from '@angular/core';
import {RegistrationService} from './registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.page.html',
    styleUrls: ['./registration.page.scss'],
    providers: [RegistrationService]
})
export class RegistrationPage implements OnInit {
    private data;
    callNewRegistraion() {
        this.register.newRegistration().subscribe((res) => {
            this.data = res;
            console.log(this.data);
        });
    }
    constructor(private register: RegistrationService) {
    }

    ngOnInit() {
        this.callNewRegistraion();
    }

}


