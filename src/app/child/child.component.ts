import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  userName;
  passWord;

  constructor() { 
    console.log("constructor is call");
    
  }

  ngOnInit() {
    console.log("onInit is call");
  }

  updatePassWord(): void { 
    this.passWord = "FPL Can Tho Password";
  }

  updateUsername(): void { 
    this.userName = "FPL Username";
  }
}
