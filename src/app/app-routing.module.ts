import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Forgot-Password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'About', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'Registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'create-pass', loadChildren: './create-pass/create-pass.module#CreatePassPageModule' },
  { path: 'apitest', loadChildren: './apitest/apitest.module#ApitestPageModule' },
  { path: 'more', loadChildren: './more/more.module#MorePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'faq', loadChildren: './more/faq/faq.module#FaqPageModule' },
  { path: 'feedback', loadChildren: './more/feedback/feedback.module#FeedbackPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
