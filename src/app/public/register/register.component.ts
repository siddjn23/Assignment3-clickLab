import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../Services/register.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  load:boolean=true;
  titleAlert:string = 'This is required';

constructor(private fb: FormBuilder, private route: Router, private registerService: RegisterService) {
  this.registerCreateForm();
}

  ngOnInit() {
  }

  registerCreateForm() {
      this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: [null, Validators.required],
      address: ['', Validators.required],
      medical: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(200)])],
      repassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(200)])]
    });
  }

  registerUser =  function (user){                                              //this is called when the form is submitted
    console.log(user);
    this.registerService.registerNewUser(user).subscribe(                       //registerNewUser is called using register service which is defined in service folder this post the data in dbJson file 
      (response) => console.log(response),
      (error) => console.log(error),
      
      );
      this.route.navigate(["login"]);                                           //if every things goes well it will redirect to login
      
  }

}
