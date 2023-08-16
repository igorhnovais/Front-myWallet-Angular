import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { NewTransaction } from 'src/app/newTransaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  transaction!: Transaction
  token!: string

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ){}

  ngOnInit(): void {
    const respStorage: string | null = localStorage.getItem("token")
    if(respStorage){
      const obj = JSON.parse(respStorage)
      this.token = obj.token
    }

    if(!this.token){
      this.router.navigate(["/sign-in"]);
    }
  }

  async newEntry(newTransaction: NewTransaction){
    await this.transactionService.postNewTransaction(this.token, newTransaction).subscribe();
    this.router.navigate(["/home"]);
  }
}
