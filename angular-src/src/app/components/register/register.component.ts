import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../Services/validate.service';
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
  password: String;
  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private router: Router
              ) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };
    //Required Fields
    if (!this.validateService.validateRegister(user)){
      return false;
    }
    if (!this.validateService.validateEmail(user.email)){
      return false;
    }
    //Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success){
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/register']);      }
    });
  }

}
