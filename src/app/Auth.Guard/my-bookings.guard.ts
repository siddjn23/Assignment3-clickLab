import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyBookingsGuard implements CanActivate {

  constructor(private route:Router){}
    canActivate():boolean
    {

      if(localStorage.getItem("loggedIn"))
      {
        return true;
      }
      else
      {
  this.route.navigate(['/login']);
        return false;

      }
    }
  
}
