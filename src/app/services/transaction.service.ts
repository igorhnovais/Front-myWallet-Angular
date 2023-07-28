import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  editTransaction(id: number, edit: Edit): Observable<Edit>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Edit>(url, edit);
  }

  postNewTransaction(newTransaction: NewTransaction): Observable<NewTransaction>{
    const url = `${this.apiUrl}/new-entry`
    return this.http.post<NewTransaction>(url, newTransaction);
  }

  postNewTransactionExit(newTransaction: NewTransaction): Observable<NewTransaction>{
    const url = `${this.apiUrl}/new-exit`
    return this.http.post<NewTransaction>(url, newTransaction);
  }
}
