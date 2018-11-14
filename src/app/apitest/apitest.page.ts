import { Component, OnInit } from '@angular/core';
import {ServicesProvider} from '../../app/apitest/test.service'
import { callCordovaPlugin } from '@ionic-native/core/decorators/common';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';
@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.page.html',
  styleUrls: ['./apitest.page.scss'],
  providers:[ServicesProvider]
})
export class ApitestPage implements OnInit {
data;
  constructor(private itemApi: ServicesProvider) {
  }

  ngOnInit() {
    this.callTest();
  }
  callTest() {
    this.itemApi.testServiceOne().subscribe((res)=> {
      this.data = res;
      console.log(this.data);
    })
  }
}
