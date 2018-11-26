import { Component, OnInit } from '@angular/core';
import {ServicesProvider} from '../../app/apitest/test.service';

@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.page.html',
  styleUrls: ['./apitest.page.scss'],
  providers: [ServicesProvider]
})
export class ApitestPage implements OnInit {
data;
  constructor(private itemApi: ServicesProvider) {
  }

  ngOnInit() {
    this.callTest();
  }
  callTest() {
    this.itemApi.testServiceOne().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
