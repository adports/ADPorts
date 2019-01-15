import { Component, OnInit } from '@angular/core';
import {ServicesProvider} from '../apitest/test.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
    providers: [ ServicesProvider]
})
export class HistoryPage implements OnInit {
    approve = false;
    unapprove = false;
    token;

    private keys;

  constructor(private GetService: ServicesProvider) { }

  ngOnInit() {
      this.GetPassList();
  }

    segmentChanged($event) {
        console.log($event.detail);
        const approved = $event.detail.value;
        const unapproved = $event.detail.value;
        if (approved === 'APPROVED' ) {
          this.approve = false;
          this.unapprove= true;
        } else if ( unapproved === 'NOT APPROVED') {
            this.unapprove = false;
            this.approve = true;
        }
        console.log($event.detail.value);
    }
    GetPassList() {
        this.GetService.PassList().subscribe((res) => {
            this.token = res;
            console.log(this.token);
            // this.strNationality = this.VehicleReg[0].DESCRIPTION;
        });
    }

    public getKeys(data) {
        this.keys = Object.keys(data);
        return true;
    }


}
