import { Component, OnInit } from '@angular/core';
import {visit} from '@angular/compiler-cli/src/ngtsc/util/src/visitor';

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.page.html',
  styleUrls: ['./create-pass.page.scss'],
})
export class CreatePassPage implements OnInit {
    orderBy;
    daily = 'daily';
  constructor() {}

  ngOnInit() {
    this.selected(this.daily);
  }

    selected(value: string) {
    alert(value);
    // console.log(this.orderBy);
        this.orderBy = value;
    }
}
