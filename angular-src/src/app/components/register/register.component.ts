import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../Services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reister',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password:String;
  constructor(private validateService:ValidateService,
              private flashMessage:FlashMessagesService,
              private authService:AuthService,
              private router:Router
              ) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user={
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password
    }
    //Required Fields
    if (!this.validateService.validateRegister(user)){
      this.flashMessage.show('please fill in all fields',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    if (!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('please use a valid email',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //Register user
    this.authService.registerUser(user).subscribe(data =>{
      if (data.success){
        this.flashMessage.show('You are now registered and can log in',{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['/login']);
      }else{
        this.flashMessage.show('Something went wrong',{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['/register']);      }
    });
  }

}