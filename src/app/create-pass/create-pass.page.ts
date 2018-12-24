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
    strHostCompany;
    strHostDepartment;
    strHostPerson = 'Praveen';
    strHostEmail ='praveen@gmail.com';
    strMobile;
    strTitle = 'Mr';
    strFullName;
    strFullnameAra = '';
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
    fileData;
    daily = 'Daily Pass Online';
    Yes = 'Yes';
    data;
    strPorts;
    Ports;
     Nationality;
     pdf1;
     pdf2;
     pdf3;
    pdf4;
    HostCompany;
    HostCompany1;


    constructor(private page: LoginPage, private GetService: ServicesProvider) {
    }

    ngOnInit() {
        this.selected(this.daily);
        this.updateMyDate(event);
        this.GetPosts();
        this.GetNationalities();
        this.HostName();
        //this.HostDepartment();
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
    getGender($event) {
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

    selected1(data) {
        this.strVeh = data;
        alert(this.strVeh);
    }

    GetNationalities() {
        this.GetService.NationalitiesService().subscribe((res) => {
            this.Nationality = res;
            console.log(this.Nationality);
            // this.strNationality = this.Nationality[0].DESCRIPTION;
        });
    }
    SelectNationality($event) {
        console.log($event);
    this.strNationality = $event.detail.value.DESCRIPTION;
    console.log(this.strNationality);
    }
// Add 64base Photo


    changeListener($event , id) {
       this.readThis($event.target , id);

   //  this.readThis($event.target);
    }

    readThis(inputValue, id) {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
        myReader.readAsDataURL(file);
        console.log(file);
        console.log(file.size < 100);
        myReader.onload = (e) => {
            if (id === 'image') {
                this.image = myReader.result;
                const myString = this.image;
                this.strPhotoBase64 = myString.substr(23).slice(0);
                console.log(this.strPhotoBase64);
            } else if (id === 'pdf') {
                this.pdf = myReader.result;
            } else if (id === 'pdf1') {
                this.pdf1 = myReader.result;
            } else if (id === 'pdf2') {
                this.pdf2 = myReader.result;
            } else if (id === 'pdf3') {
                this.pdf3 = myReader.result;
            } else if (id === 'pdf4') {
                this.pdf4 = myReader.result;
            }
        };

     }
 resetFile() {
            // const file = document.querySelector('.file');
           this.image = (<HTMLInputElement>document.getElementById('file-input')).value = '';
           alert(this.image);
}
    HostName() {
        this.GetService.HostNameService().subscribe((res) => {
            this.HostCompany = res;
            console.log(this.HostCompany);
        });
    }
    SelectHostName($event) {
        console.log($event);
        this.strHostCompany = $event.detail.value.DESCRIPTION;
        console.log(this.strHostCompany);
        this.HostDepartment($event.detail.value.LOOKUP_CODE);
    }
    HostDepartment(hostname) {
        this.GetService.HostDepartmentService(hostname).subscribe((res) => {
         this.strHostDepartment = res;
            console.log(this.strHostDepartment);
        });
    }
    SelectHostDepartment($event) {
        console.log($event);
    }

// createPass Pass
    createPass() {
        const submitPass = 'strLoginType=' + this.strLoginType
            + 'strLoginId' + this.strLoginId
            + 'strPassType' + this.strPassType
            + 'dtProposedEntryDate' + this.dtProposedEntryDate
            + 'dtProposedDepartureDate' + this.dtProposedDepartureDate
            + 'strHostCompany' + this.strHostCompany
            + 'strHostDepartment' + this.strHostDepartment
            + 'strHostPerson' + this.strHostPerson
            + 'strEmail' + this.strEmail
            + 'strMobile' + this.strMobile
            + 'strTitle'  + this.strTitle
            + 'strFullName'  + this.strFullName
            + 'strFullnameAra'  + this.strFullnameAra
            + 'strGender' + this.strGender
            + 'dtDOB' + this.dtDOB
            + 'strNationality' + this.strNationality
            + 'strReason' + this.strReason
            + 'strEquipment' + this.strEquipment
            + 'strRegNo' + this.strRegNo
            + 'strRegCert' + this.strRegCert
            + 'strCompCert' + this.strCompCert
            + 'strLoadTestCert' + this.strLoadTestCert
            + 'strID_type' + this.strID_type
            + 'strID_No' + this.strID_No
            + 'strEmirateID' + this.strEmirateID
            + 'strCardNumber' + this.strCardNumber
            + 'strVeh' + this.strVeh
            + 'strVeh_No' + this.strVeh_No
            + 'strVehReg' + this.strVehReg
            + 'strVehPlate' + this.strVehPlate
            + 'strAreaToVisit' + this.strAreaToVisit
            + 'strCNIA_No' + this.strCNIA_No
            + 'strLinked_TokenNo' + this.strLinked_TokenNo
            + 'strCameraNo' + this.strCameraNo
            + 'strContract' + this.strContract
            + 'strPartyName' + this.strPartyName
            + 'strFax' + this.strFax
            + 'strAddress' + this.strAddress
            + 'strTelephone' + this.strTelephone
            + 'strPhotoBase64' + this.strPhotoBase64
            + 'pdf' + this.pdf
        console.log(submitPass);

    }
}
