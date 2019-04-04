import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( public http: HttpClient ) { }

  getuser(parameter)
  {
    return this.http.get("http://localhost:3000/posts",
    {
      params:parameter
    });
  }
}
