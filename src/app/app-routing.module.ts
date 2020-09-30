import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
     redirectTo:'login',
    pathMatch:'full'
  },
  {
   path:'login',
   component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admindashboard',
    component:AdmindashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
