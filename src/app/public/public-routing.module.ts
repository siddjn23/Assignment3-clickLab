import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from '../private/profile/profile.component';


const publicRoutes: Routes = [
  { path: '',component: RegisterComponent  },
  
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
