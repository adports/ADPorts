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
    Yes = 'Yes';
    constructor() {}
ngOnInit() {
    this.selected(this.daily);
    this.selected1(this.orderBy);
    }
//Pass Type
selected(value: string) {
    alert(value);
    this.orderBy = value;
    console.log(this.orderBy);
    }

    selected1(value: string) {
    alert(value);
    this.orderBy = value;
    console.log(this.orderBy);
    }
}
