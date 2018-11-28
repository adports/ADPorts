import {Component, OnInit} from '@angular/core';
import {RegistrationService} from './registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.page.html',
    styleUrls: ['./registration.page.scss'],
    providers: [RegistrationService]
})
export class RegistrationPage implements OnInit {
    private data;
OrgName;
OrgEmail;
OrgTel;
OrgPOBox
OrgCity
OrgType
FirstName
LastName
Designation
Department
Mobile
UserId
Email
    constructor(private register: RegistrationService) {
    }

    ngOnInit() {
        this.callNewRegistraion();
    }

    callNewRegistraion() {
        const data =
            '&strOrgName=' + this.OrgName
            + '&strOrgEmail=' + this.OrgEmail
            + '&strOrgTel=' + this.OrgTel
            + '&strOrgFax=' + ''
            + '&strOrgWebsite=' + ''
            + '&strOrgAdd1=' + ''
            + '&strOrgAdd2=' + ''
            + '&strOrgPOBox=' + this.OrgPOBox
            + '&strOrgCity=' + this.OrgCity
            + '&strOrgState=' + ''
            + '&strOrgNationality=' + ''
            + '&strOrgCountry=' + ''
            + '&strOrgType=' + this.OrgType
            + '&strTitle=' + ''
            + '&strFirstName=' + this.FirstName
            + '&strLastName=' + this.LastName
            + '&strDesignation=' + this.Designation
            + '&strDepartment=' + this.Department
            + '&strPhone=' + ''
            + '&strFax=' + ''
            + '&strMobile=' + this.Mobile
            + '&strUserId=' + this.UserId
            + '&strEmail=' +  this.Email
            + '&strAtt1Name=' + ''
            + '&strAtt1Ext=' + ''
            + '&strAtt1Base64=' + ''
            + '&strAtt2Name=' + ''
            + '&strAtt2Ext=' + ''
            + '&strAtt2Base64=' + ''
            + '&strAtt3Name=' + ''
            + '&strAtt3Ext=' + ''
            + '&strAtt3Base64=' + ''
            + '&strAtt4Name=' + ''
            + '&strAtt4Ext=' + ''
            + '&strAtt4Base64=' + '';
        console.log(data);
        this.register.newRegistration(data).subscribe((res) => {
            this.data = res;
            console.log(this.data);
        });
    }
}



