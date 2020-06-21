import { StudentEditComponent } from './components/table/student-edit/student-edit.component';
import { StudentViewComponent } from './components/table/student-view/student-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './components/setting/setting.component';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{ path: 'registration', loadChildren: () => import('./auth/registration/registration.module').then(m => m.RegistrationModule) },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'setting', component: SettingComponent },
{ path: 'studentview', component: StudentViewComponent },
{ path: 'studentedit', component: StudentEditComponent },
{ path: 'navbar', component: NavbarComponent },
{ path: 'forgotpassword', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
{ path: 'resetpassword', loadChildren: () => import('./auth/reset-password/reset-password.module').then(m => m.ResetPasswordModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
