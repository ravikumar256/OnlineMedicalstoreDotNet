import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/signup.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userSignUpRequest: SignUp = {
    UserName: '',
    UserEmail: '',
    Password: ''
  }
  isFormSubmitted = false;
  constructor(private userService: UsersService,private router: Router) { }
  signup() {
    this.isFormSubmitted=true;
    this.userService.userSignUp(this.userSignUpRequest)
    .subscribe({
      next: (response:any) => {
        alert(response.message);
        this.router.navigate(['home/users/login']);
      },
      error: (resp:HttpErrorResponse) => {
        console.log('Registering failed:',resp.error);
        alert("Registeration Failed: " + resp.error);
        this.router.navigate(['signup']);
      }
    })
  }

}
