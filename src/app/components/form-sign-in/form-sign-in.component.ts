import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignIn } from 'src/app/SignIn';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css']
})
export class FormSignInComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<SignIn>()

  signInForm!: FormGroup

  constructor(){ }

  ngOnInit(): void {
      this.signInForm = new FormGroup({
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required])
      })
  }

  get email(){
    return this.signInForm.get("email")!;
  }

  get password(){
    return this.signInForm.get("password")!;
  }

  submit(){
    if(this.signInForm.invalid){
      return;
    }

    this.onSubmit.emit(this.signInForm.value);
  }
}
