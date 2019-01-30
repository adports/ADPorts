import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    Name: any;
    private dtDOB;
    Mobile;
    Email;
    Telephone;

  constructor() { }

  ngOnInit() {
  }

    DateOfBirt($event) {
        console.log($event);
        this.dtDOB = $event.detail.value;
        // this.dtDOB = this.dtDOB.detail.value;
        console.log(this.dtDOB);
    }
    Save() {
        const save = 'name=' + this.Name + '&dtDOB' + this.dtDOB + '&Mobile=' + this.Mobile + '&Email=' + this.Email + '&Telephone=' + this.Telephone
  console.log(save);
  }
    reset(save){
alert('Do you Want to Reset?');
    }
}
