///<reference path="../../../../node_modules/angular2-flash-message/node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit } from '@angular/core';
import  {AuthService} from '../../Services/auth.service';
import {Router} from  '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private authService:AuthService,
              private router:Router,
              private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    const user={
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data=>{
      if (!data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
      } else {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('you are now logged in', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/home']);
      }
    });
    this.username="";
    this.password="";
  }
}
