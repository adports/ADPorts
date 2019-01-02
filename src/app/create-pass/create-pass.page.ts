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
    title;
    Gender;
    uad;
    strLoginType = 'CUSTOMER';
    strLoginId = 'alkhat';
    strPassType;
    dtProposedEntryDate = moment().format('');
    dtProposedDepartureDate = moment(this.dtProposedEntryDate).add(1, 'days').format();
    strHostCompany;
    strHostDepartment;
    strHostPerson;
    strHostEmail;
    strMobile;
    strTitle = 'Mr';
    strFullName;
    strFullnameAra = '';
    strGender = 'Male';
    dtDOB = moment().format();
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
    No = 'No';
    data;
    strPorts;
    Ports;
    passType;
    strPassTyp;
    Nationality;
    pdf;
    pdf1;
    pdf2;
    pdf3;
    pdf4;
    HostCompany;
    HostCompany1;
    Department;
    strPerson;
     IDs;
     Vehicle = false;
     VehicleReg;
    VehiclePlate;
    mySortingFunction;
    private strPdfBase64: string;
    Attachment ;


    constructor(private page: LoginPage, private GetService: ServicesProvider) {
    }

    ngOnInit() {
        // this.selectedPass();
        this.updateMyDate(event);
        this.GetPosts();
        this.GetNationalities();
        this.HostName();
        this.GetPassType();
        this.GetIDs();
        this.GetVeh();
        // this.updateMyDate(event);
    }

// strPassType
    selectedPass(pass) {
        this.strPassType = pass.DESCRIPTION;
        // alert(this.strPassType);
        console.log(this.strPassType);
    }

// port
    selectedPort(port) {
        this.strPorts = port.DESCRIPTION;
        console.log(this.strPorts);
    }

// // Entry Date & Time
//     updateMyDate(event) {
//         const firstDate = moment(event);
//         this.dtProposedEntryDate = firstDate.format();
//         const dtProposedEntryDate = moment(firstDate).add(1, 'days');
//         this.dtProposedDepartureDate = dtProposedEntryDate.format();
//
//     }
    updateMyDate(dtProposedEntryDate) {
        console.log(dtProposedEntryDate);
        this.dtProposedDepartureDate = moment(this.dtProposedEntryDate).add(1, 'days').format();
        console.log(this.dtProposedDepartureDate);
    }

// GET PASSTYPE
    GetPassType() {
        this.GetService.GetPassType().subscribe((res) => {
            console.log(JSON.stringify(res));
            this.passType = res;
            this.strPassType = this.passType[0].DESCRIPTION;

        });
    }

// strPorts
    GetPosts() {
        this.GetService.testServiceOne().subscribe((res) => {
            this.Ports = res;
            console.log(this.Ports);
            this.strPorts = this.Ports[0].DESCRIPTION;
        });
    }
// strGetID
    GetIDs() {
        this.GetService.GetIDService().subscribe((res => {
            this.IDs = res;
            console.log(this.IDs);
            this.strID_type = this.IDs[0].DESCRIPTION;
        }));
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
        console.log($event);
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


    selected1(data) {
        this.strVeh = data;
        alert(this.strVeh);
        if (this.strVeh === this.No) {
            this.Vehicle = false;
        } else { this.Vehicle = true; }

    }

    GetNationalities() {
        this.GetService.NationalitiesService().subscribe((res) => {
            this.Nationality = res;
            console.log(this.Nationality);
            // this.strNationality = this.Nationality[0].DESCRIPTION;
        });
    }

    GetVeh() {
        this.GetService.GetVehService().subscribe((res) => {
            this.VehicleReg = res;
            console.log(this.VehicleReg);
            // this.strNationality = this.VehicleReg[0].DESCRIPTION;
        });
    }
    SelectGetVeh($event) {
        console.log($event);
        this.strVehReg = $event.detail.value.DESCRIPTION;
        console.log(this.strVehReg + ' vehicle');
        this.GetVehPlate(this.strVehReg);
    }
    GetVehPlate(strVehReg) {
        alert(strVehReg);
        this.GetService.GetVehPlateService(strVehReg).subscribe((res) => {
            this.VehiclePlate = res;
            console.log(this.VehiclePlate);
            // this.strNationality = this.VehicleReg[0].DESCRIPTION;
        });
    }
    SelectGetVehPlate($event) {
        alert(this.strVehReg);
        console.log($event);
    }
    SelectNationality($event) {
        console.log($event);
        this.strNationality = $event.detail.value.DESCRIPTION;
        console.log(this.strNationality);
    }



// Add 64base Photo
changeListener($event, id) {
        this.readThis($event.target, id);
    }

readThis(inputValue, id) {
        const file: File = inputValue.files[0];
        const fileSize = (Math.round(file.size * 100 / 1024) / 100);
        alert(fileSize);
        if (fileSize > 0 && fileSize <= 100) {
            alert('0');
            const myReader: FileReader = new FileReader();
            myReader.readAsDataURL(file);
            myReader.onload = (e) => {
                if (id === 'image') {
                    this.image = myReader.result;
                    const myString = this.image;
                    this.strPhotoBase64 = myString.substr(23).slice(0);
                    console.log(this.strPhotoBase64);
                }
            };
        } else {
            console.log('Hale Magya less than 100 size enter maadle');
    }
}

// Add 64base PDF
changeListenerPdf($event, id) {
        console.log($event,  id);
        this.readThisPdf($event.target, id);
    }


readThisPdf(inputValue, id) {
        const file: File = inputValue.files[0];
        const fileSize = (Math.round(file.size * 100 / 1024) / 100);
        alert(fileSize);
            if (fileSize > 0 && fileSize <= 100) {
            const myReader: FileReader = new FileReader();
            myReader.readAsDataURL(file);
            myReader.onload = (e) => {
                if ( id === 'Attachment' ) {
                    this.pdf = myReader.result;
                    const myString = this.pdf;
                    this.pdf = myString.substr(23).slice(0);
                    console.log(this.pdf);
                } else if (id === 'Attachment-1') {
                    this.pdf1 = myReader.result;
                    const myString = this.pdf1;
                    this.pdf1 = myString.substr(23).slice(0);
                    console.log(this.pdf1);
                } else if (id === 'Attachment-2') {
                    this.pdf2 = myReader.result;
                    const myString = this.pdf2;
                    this.pdf2 = myString.substr(23).slice(0);
                    console.log(this.pdf2);
                } else if (id === 'Attachment-3') {
                    this.pdf3 = myReader.result;
                    const myString = this.pdf3;
                    this.pdf3 = myString.substr(23).slice(0);
                    console.log(this.pdf3);
                }
            };
        } else {
            console.log('Hale Magya less than 100 size enter maadle');
        }
    }


resetFile(id) {
        // const file = document.querySelector('.file');
        this.image = (<HTMLInputElement>document.getElementById('file-input')).value = '';

        // this.pdf = (<HTMLInputElement>document.getElementById('Attachment')).value = '';
        // this.pdf1 = (<HTMLInputElement>document.getElementById('Attachment-1')).value = '';

     if (id === 'pdf') {
         alert((<HTMLInputElement>document.getElementById('Attachment')).value);
         this.pdf = (<HTMLInputElement>document.getElementById('Attachment')).value = '';
     } else if (id === 'pdf1') {
         this.pdf1 = (<HTMLInputElement>document.getElementById('Attachment-1')).value = '';
     } else if (id === 'pdf2'){
         this.pdf2 = (<HTMLInputElement>document.getElementById('Attachment-2')).value = '';
     } else if (id === 'pdf3') {
         this.pdf3 = (<HTMLInputElement>document.getElementById('Attachment-3')).value = '';
     }
    }


HostName() {
        this.GetService.HostNameService().subscribe((res) => {
            this.HostCompany = res;
        });
    }

SelectHostName($event) {
        console.log($event);
        this.strHostCompany = $event.detail.value.LOOKUP_CODE;
        alert(this.strHostCompany);
        this.HostDepartment($event.detail.value.LOOKUP_CODE);
    }

HostDepartment(strHostCompany) {
        this.GetService.HostDepartmentService(strHostCompany).subscribe((res) => {
            this.Department = res;
        });
    }

SelectHostDepartment($event) {
        console.log($event);
        this.strHostDepartment = $event.detail.value.LOOKUP_CODE;
        alert(this.strHostCompany);
        alert(this.strHostDepartment);
        this.HostPerson($event.detail.value.LOOKUP_CODE, $event.detail.value.LOOKUP_CODE);
    }

HostPerson(strHostCompany, strHostDepartment) {
        strHostCompany = this.strHostCompany;
        alert(strHostCompany + 'p1');
        alert(strHostDepartment + 'p2');
        this.GetService.HostPersonService(strHostCompany, strHostDepartment).subscribe((res) => {
            this.strHostPerson = res;
            console.log(this.strHostPerson);
        });
    }

    SelectHostPerson($event) {
        console.log($event);
    }

// createPass Pass
    createPass() {
        const submitPass = 'strLoginType=' + this.strLoginType
            + 'strLoginId' + this.strLoginId
            + 'strPassType' + this.strPassType
            + 'dtProposedEntryDate' + this.dtProposedEntryDate
            + 'dtProposedDepartureDate' + this.dtProposedDepartureDate
            + 'strPorts'  + this.strPorts
            + 'strHostCompany' + this.strHostCompany
            + 'strHostDepartment' + this.strHostDepartment
            + 'strHostPerson' + this.strHostPerson
            + 'strEmail' + this.strEmail
            + 'strMobile' + this.strMobile
            + 'strTitle' + this.strTitle
            + 'strFullName' + this.strFullName
            + 'strFullnameAra' + this.strFullnameAra
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
            + 'pdf' + this.pdf;
        console.log(submitPass);

    }
}
