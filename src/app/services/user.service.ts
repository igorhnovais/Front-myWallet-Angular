import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignIn } from '../SignIn';
import { environment } from 'src/environments/environments';
import { SignUp } from '../SignUp';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/auth/sign-in`;
  private apiUrl2 = `${this.baseApiUrl}/auth/sign-up`;
  private response!: string;


  constructor(private http: HttpClient) { }

  newLogin(signIn: SignIn): Observable<SignIn>{
    return this.http.post<SignIn>(this.apiUrl, signIn);
  }

  newSignUp(signUp: SignUp): Observable<SignUp>{
    return this.http.post<SignUp>(this.apiUrl2, signUp)
  }
}
