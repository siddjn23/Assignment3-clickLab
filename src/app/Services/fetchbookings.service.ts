import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchbookingsService {

  constructor(private http:HttpClient ) { }
  fetch_booking_details()
  {
      return this.http.get('http://localhost:3000/Bookings')
  };
}
