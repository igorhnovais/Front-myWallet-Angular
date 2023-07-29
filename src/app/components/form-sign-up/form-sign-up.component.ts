import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUp } from 'src/app/SignUp';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<SignUp>()

  signUpForm!: FormGroup

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  get email(){
    return this.signUpForm.get("email")!;
  }

  get password(){
    return this.signUpForm.get("password")!;
  }

  submit(){
    if(this.signUpForm.invalid){
      return;
    }

    this.onSubmit.emit(this.signUpForm.value);
  }
}
