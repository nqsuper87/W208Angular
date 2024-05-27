import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  user = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  suggest(){
    console.log("suggestion!");
    this.user.email = "fpoly@gmail.com";
  }

  onSubmit(loginForm : NgForm){
    
    console.log("loginForm:", loginForm.value);
  }

  onSubmitWithViewChild(){
    console.log("loginForm:", this.loginForm.value);
  }
}