import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Response } from '../Response';
import { Transaction } from '../Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/transactions`

  constructor(private http: HttpClient) { }

  getAllTransactions():Observable<Transaction[]>{
  return this.http.get<Transaction[]>(this.apiUrl)
  }

  getTransaction(id:number):Observable<Transaction>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Transaction>(url)
  }

  removeTransaction(id:number){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url)
  }
}
