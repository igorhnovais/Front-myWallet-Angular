import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignIn } from '../SignIn';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/auth/sign-in`;
  private response!: string;


  constructor(private http: HttpClient) { }

  newLogin(signIn: SignIn): Observable<SignIn>{
    return this.http.post<SignIn>(this.apiUrl, signIn);
  }
}
