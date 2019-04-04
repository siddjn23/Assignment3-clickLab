import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  updateOldUser(id,users){
    return this.http.patch('http://localhost:3000/posts/'+id,users);
  }

  getuser(id)
  {
    return this.http.get("http://localhost:3000/posts/"+id);

}
}
