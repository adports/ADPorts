import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import {CreatePageModule} from '../create/create.module';
import {CreatePassPageModule} from '../create-pass/create-pass.module';
import {HistoryPageModule} from '../history/history.module';
import {SettingsPageModule} from '../settings/settings.module';
import {MorePageModule} from '../more/more.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
      CreatePageModule,
      CreatePassPageModule,
      HistoryPageModule,
      SettingsPageModule,
      MorePageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
