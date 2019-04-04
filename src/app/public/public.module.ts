import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }    from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { PrivateModule } from '../private/private.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    PrivateModule
  ],
  exports:[RegisterComponent,LoginComponent]
})
export class PublicModule { }
