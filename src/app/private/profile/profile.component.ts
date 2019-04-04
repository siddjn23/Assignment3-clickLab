import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ProfileService } from '../../Services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  
  pForm: FormGroup;
  load:boolean=true;
  post: any;
  description: string = '';
  name: string= '';
  titleAlert:string = 'This is required';
  getdata:any;
  

  constructor(private fb: FormBuilder, private route: Router, private update: ProfileService){

    this.pForm = fb.group(
    {
      firstname: [JSON.parse(localStorage.getItem("user_info"))[0].firstname, Validators.required],
      emailid: [JSON.parse(localStorage.getItem("user_info"))[0].email, Validators.required],
      phone: [JSON.parse(localStorage.getItem("user_info"))[0].phone, Validators.required],
      medical: [JSON.parse(localStorage.getItem("user_info"))[0].medical, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      address: [JSON.parse(localStorage.getItem("user_info"))[0].address, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      validate : ''
    }
    );
    
  }

  ngOnInit() {
  }
  updateUser =  function (user){
    // console.log(user);
    this.update.updateOldUser(JSON.parse(localStorage.getItem("user_info"))[0].id,user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      // console.log("Success")
      
      );
      setTimeout(() => {
        
        this.update.getuser(JSON.parse(localStorage.getItem("user_info"))[0].id).subscribe(
        res => {
          this.getdata = [res];
          localStorage.setItem("user_info",JSON.stringify(this.getdata));
      }

      );
      },2000);
      
      
  }

}
