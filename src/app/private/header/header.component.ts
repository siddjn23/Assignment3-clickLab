import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 name:string;
booking_count:number;
  constructor() { }

  ngOnInit() {
    this.name=JSON.parse(localStorage.getItem("user_info"))[0].firstname;
    this.booking_count=JSON.parse(localStorage.getItem("no_of_bookings"));

  }


}
