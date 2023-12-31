import { Component, OnInit } from '@angular/core';
import { SignIn } from 'src/app/SignIn';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  private response!: string;
  private user = '';

  constructor(
    private userService: UserService,
    private router: Router
    ) {}
    
  ngOnInit(): void {}

  async newLogin(signIn: SignIn){ 
    await this.userService.newLogin(signIn)
    .subscribe({
      next: (res) => {
        this.user = JSON.stringify(res),
        localStorage.setItem("token", this.user);
        this.router.navigate(["/home"]);
      },
      error: (res) => {
        console.log("error", res.error)
      }
    });
  }
}
