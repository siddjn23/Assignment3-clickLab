import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 name:string;
  constructor() { }

  ngOnInit() {
    this.name=JSON.parse(localStorage.getItem("user_info"))[0].firstname;   //this will fetch the data from local storage

  }


}
