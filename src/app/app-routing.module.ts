import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {                                                               
    path: '',                                                          //Lazy Routing (this will redirect to register component,part of Public module)     
    loadChildren: '../app/public/public.module#PublicModule'
  },
  {
    path: 'Profile',                                                  //(this will redirect to profile component, part of private module)
    loadChildren: '../app/private/private.module#PrivateModule'           
  },    
  { path: '**', component: PageNotFoundComponent }                    //(this will redirect to page not found page)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
