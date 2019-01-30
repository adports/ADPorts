import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import {CreatePassPage} from '../create-pass/create-pass.page';
import {HistoryPage} from '../history/history.page';
import {SettingsPage} from '../settings/settings.page';
import {MorePage} from '../more/more.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: '',
      //   redirectTo: '/tabs/(more:createpass)',
      //   pathMatch: 'full',
      // },
      {
        path: 'createpass',
        outlet: 'createpass',
        component: CreatePassPage
      },
      {
            path: 'history',
            outlet: 'history',
            component: HistoryPage
        },
        {
            path: 'settings',
            outlet: 'settings',
            component: SettingsPage
        },
        {
            path: 'more',
            outlet: 'more',
            component: MorePage
        },
    ]
  },
  {
    path: 'more',
    redirectTo: '/tabs/(more:more)',
    pathMatch: 'full'
  },
    {
        path: 'createpass',
        redirectTo: '/tabs/(createpass:createpass)',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
