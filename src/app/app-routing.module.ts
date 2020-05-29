import { StudentEditComponent } from './components/table/student-edit/student-edit.component';
import { StudentViewComponent } from './components/table/student-view/student-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{ path: 'registration', loadChildren: () => import('./auth/registration/registration.module').then(m => m.RegistrationModule) },
{ path: '', redirectTo: '/registration', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'student-view', component: StudentViewComponent },
{ path: 'student-edit', component: StudentEditComponent },
{ path: 'navbar', component: NavbarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
