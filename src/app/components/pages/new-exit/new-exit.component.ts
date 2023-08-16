import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { NewTransaction } from 'src/app/newTransaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-exit',
  templateUrl: './new-exit.component.html',
  styleUrls: ['./new-exit.component.css']
})
export class NewExitComponent implements OnInit {
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

  async newExit(newTransaction: NewTransaction){
    this.transactionService.postNewTransactionExit(this.token, newTransaction).subscribe();
    this.router.navigate(["/home"]);
  }
  
}
