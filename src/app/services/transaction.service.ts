import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Response } from '../Response';
import { Transaction } from '../Transaction';
import { Edit } from '../Edit';
import { NewTransaction } from '../newTransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/transactions`

  constructor(private http: HttpClient) { }

  getAllTransactions(token: string):Observable<Transaction[]>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Transaction[]>(this.apiUrl, {headers})
  }

  getTransaction(id:number):Observable<Transaction>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Transaction>(url)
  }

  removeTransaction(id:number){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url)
  }

  editTransaction(id: number, edit: Edit): Observable<Edit>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Edit>(url, edit);
  }

  postNewTransaction(token: string, newTransaction: NewTransaction): Observable<NewTransaction>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/new-entry`
    return this.http.post<NewTransaction>(url, newTransaction, {headers});
  }

  postNewTransactionExit(token:string, newTransaction: NewTransaction): Observable<NewTransaction>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/new-exit`
    return this.http.post<NewTransaction>(url, newTransaction, {headers});
  }
}
