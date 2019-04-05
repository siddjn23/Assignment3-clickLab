import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  getData: any;

  constructor(private fb: FormBuilder,private http:HttpClient, private loginget:LoginService, private router: Router ) {
    this.loginCreateForm();
  }
  
    ngOnInit() {
     
    }
  
    loginCreateForm() {
      this.loginForm = this.fb.group({
       
        email: ['',Validators.required],
        pass: ['',Validators.required]
      });
    }

    onSubmit() {                                                        
      //console.log(this.loginForm.value);
      this.loginget.getuser(this.loginForm.value).subscribe(res => {      //this will call GET request which is in Services/Login Service 
        this.getData = res;
        if ((Object.keys(res).length)==0)
        {
          console.log("invalid user");
        }
        else                                                              
        {
          
          localStorage.setItem("user_info",JSON.stringify(res));
          localStorage.setItem("loggedIn","true");
          this.router.navigate(['Profile']);
        }
      })
      
    }


  
  }
