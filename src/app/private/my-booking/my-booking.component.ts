import { Component, OnInit } from '@angular/core';
import {FetchbookingsService} from '../../Services/fetchbookings.service';


@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css'],
  providers:[FetchbookingsService]
})
export class MyBookingComponent implements OnInit {

  constructor(private booking_details:FetchbookingsService) { }
  upcoming_bookings:any;
  past_bookings:any;
  toggle_upcoming:boolean=true;
  toggle_past:boolean=false;


  ngOnInit() {
    this.booking_details.fetch_booking_details().subscribe(result=>{

      this.upcoming_bookings=result[0].upcoming;
      this.past_bookings=result[0].past;

    });
  }
  postProfile(){
  this.toggle_past=false;
  this.toggle_upcoming=true;
  


   }
   toggle_bookings()
  {

    this.toggle_upcoming=false;
    this.toggle_past=true;
    

  }



}
