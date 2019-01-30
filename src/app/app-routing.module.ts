import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'forgot', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'createpass', loadChildren: './create-pass/create-pass.module#CreatePassPageModule' },
  { path: 'apitest', loadChildren: './apitest/apitest.module#ApitestPageModule' },
  { path: 'more', loadChildren: './more/more.module#MorePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'faq', loadChildren: './more/faq/faq.module#FaqPageModule' },
  { path: 'feedback', loadChildren: './more/feedback/feedback.module#FeedbackPageModule' },
  { path: 'kizad', loadChildren: './create/create.module#CreatePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, {useHash: false}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
