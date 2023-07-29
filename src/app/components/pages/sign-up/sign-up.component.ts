import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/SignUp';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  async newSignUp(signUp: SignUp){
    await this.userService.newSignUp(signUp).subscribe();
    //localStorage
    this.router.navigate(["/home"]);
  }
}
