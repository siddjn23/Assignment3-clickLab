import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { FAQsComponent } from './faqs/faqs.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileGuard } from '../Auth.Guard/profile.guard';
import { MyBookingsGuard } from '../Auth.Guard/my-bookings.guard';

const privateRoutes: Routes = [

  { path: 'Profile', canActivate:[ProfileGuard], component: ProfileComponent  },
  { path: 'mybooking',canActivate:[MyBookingsGuard], component: MyBookingComponent  },
  { path: 'FAQs', canActivate:[MyBookingsGuard],component: FAQsComponent},
  { path: 'logout', component: LogoutComponent },
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(privateRoutes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
