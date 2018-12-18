import {Component, OnInit} from '@angular/core';
import {LoginPage} from '../login/login.page';
import * as moment from 'moment';
import {ServicesProvider} from '../apitest/test.service';

@Component({
    selector: 'app-create-pass',
    templateUrl: './create-pass.page.html',
    styleUrls: ['./create-pass.page.scss'],
    providers: [LoginPage, ServicesProvider]
})
export class CreatePassPage implements OnInit {
    image;
    pdf;
    title;
    Gender;
    uad;
    strLoginType = 'CUSTOMER';
    strLoginId = 'alkhat';
    strPassType;
    dtProposedEntryDate;
    dtProposedDepartureDate;
    strHostCompany = 'Abu Dhabi Ports';
    strHostDepartment = 'Operations';
    strHostPerson;
    strHostEmail;
    strMobile;
    strTitle = 'Mr';
    strFullName;
    strFullnameAra;
    strGender = 'Male';
    dtDOB = new Date();
    strNationality;
    strReason;
    strEquipment;
    strRegNo;
    strRegCert;
    strCompCert;
    strLoadTestCert;
    strID_type = 'UAD';
    strID_No;
    strEmirateID;
    strCardNumber;
    strVeh = 'Yes';
    strVeh_No;
    strVehReg;
    strVehPlate;
    strAreaToVisit;
    strCNIA_No;
    strLinked_TokenNo;
    strCameraNo;
    strContract;
    strCUST_CODE;
    strPartyName;
    strPartyNameAra;
    strAddress;
    Address;
    strEmail;
    strTelephone;
    strFax;
    selectedPortNew;
    strPhotoBase64;
    strAttach1Base64;
    strAttach1Ext;
    strAttach2Name;
    strAttach2Ext;
    strAttach2Base64;
    strAttach3Name;
    strAttach3Base64;
    strAttach3Ext;
    strAttach4Name;
    strAttach4Base64;
    strAttach4Ext;
    daily = 'Daily Pass Online';
    Yes = 'Yes';
    data;
    strPorts;
    Ports;
     Nationality;
    private $event: any;
    private prii ;
  ;
constructor(private page: LoginPage, private GetService: ServicesProvider) {
    }

    ngOnInit() {
        this.selected(this.daily);
        this.updateMyDate(event);
        this.GetPosts();
        this.GetNationalities();
   }
  // strPassType
    selected(value: string) {
        this.strPassType = value;
        console.log(this.strPassType);
    }
    // port
    selectedPort(port) {
        this.strPorts = port;
    }


// Entry Date & Time
    updateMyDate(event) {
        const firstDate = moment(event);
        this.dtProposedEntryDate = firstDate.format();
        const dtProposedEntryDate = moment(firstDate).add(1, 'days');
        this.dtProposedDepartureDate = dtProposedEntryDate.format();

    }
// strPorts
    GetPosts() {
        this.GetService.testServiceOne().subscribe((res) => {
            this.Ports = res;
            console.log(this.Ports);
            this.strPorts = this.Ports[0].DESCRIPTION;
        });
    }
// strTitle
    GetTile($event) {
        // const valueEle = document.getElementById('title.value');
        this.title = $event;
        console.log(this.title);
        this.strTitle = this.title.detail.value;
        console.log(this.strTitle);
    }

    // Date of Birth
    DateOfBirt($event) {
        this.dtDOB = $event.detail.value;
        // this.dtDOB = this.dtDOB.detail.value;
        console.log(this.dtDOB);
    }
    //  Gender
    getGender($event){
        this.Gender = $event;
        console.log(this.Gender);
        this.strGender = this.Gender.detail.value;
    }
    // Get UAD Type
    GetUID($event) {
        this.uad = $event;
        console.log(this.uad);
        this.strID_type = this.uad.detail.value;
    }


    Attach() {
        alert('add attach');
    }

    selected1(data){
        this.strVeh = data;
        alert(this.strVeh);
    }

    GetNationalities(){
        this.GetService.NationalitiesService().subscribe((res) => {
            this.Nationality = res;
            console.log(this.Nationality);
            this.strNationality = this.Nationality;
        });
    }
    SelectNationality($event) {
    // this.strNationality = $event;
    console.log($event);
    }
// Add 64base Photo


    changeListener($event): void {
    alert(JSON.stringify($event));
     const prii = this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
        myReader.readAsDataURL(file);
        console.log(file);
        console.log(file.size < 100);
        myReader.onloadend = (e) => {
            this.image = myReader.result;
            console.log(this.image + 'image');
        };
    }


// createPass Pass
    createPass() {
        const submitPass = 'strLoginType=' + this.strLoginType
            + 'strLoginId' + this.strLoginId
            + 'strPassType' + this.strPassType
            + 'dtProposedEntryDate' + this.dtProposedEntryDate
            + 'dtProposedDepartureDate' + this.dtProposedDepartureDate
            + 'strReason' + this.strReason
            + 'strPorts' + this.strPorts
            + 'strTitle'  + this.strTitle
            + 'strGender' + this.strGender
            + 'dtDOB' + this.dtDOB
            + 'strID_type' + this.strID_type
            + 'strID_No' + this.strID_No
            + 'strEmail' + this.strEmail
            + 'strAreaToVisit' + this.strAreaToVisit
            + 'strFax' + this.strFax
            + 'strVeh' + this.strVeh
            + 'strAddress' + this.strAddress
            + 'strEmail' + this.strEmail
            + 'strTelephone' + this.strTelephone
        console.log(submitPass);

    }
}
