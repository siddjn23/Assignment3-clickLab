import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MyBookingComponent } from './my-booking/my-booking.component';
import { FAQsComponent } from './faqs/faqs.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivateRoutingModule } from './private-routing.module';



import { ReactiveFormsModule }    from '@angular/forms';


@NgModule({
  declarations: [MyBookingComponent, FAQsComponent, LogoutComponent, HeaderComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[ProfileComponent,MyBookingComponent,LogoutComponent]
})
export class PrivateModule { }
