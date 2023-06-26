import { Component, OnInit } from '@angular/core';
import { SignIn } from 'src/app/SignIn';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  constructor(private userService: UserService) {}
  ngOnInit(): void {}

  async newLogin(signIn: SignIn){
    await this.userService.newLogin(signIn).subscribe();
  }
}
