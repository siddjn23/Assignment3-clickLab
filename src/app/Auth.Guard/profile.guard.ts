import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  
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
