import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-moves',
  templateUrl: './all-moves.component.html',
  styleUrls: ['./all-moves.component.css']
})
export class AllMovesComponent implements OnInit{
  allTransactions: Transaction[] = [];
  balance: any

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ){}

  ngOnInit(): void {
    const respStorage: string | null = localStorage.getItem("token")
    let token = null
    if(respStorage){
      const obj = JSON.parse(respStorage)
      token = obj.token
    }

    if(!token){
      this.router.navigate(["/sign-in"]);
    }

    this.transactionService.getAllTransactions(token)
    .subscribe({next: (res) => {this.allTransactions = res, console.log("ppopo", this.allTransactions)}
      
      , error: (res) => console.log("error", res)})

    this.transactionService.getBalance(token)
    .subscribe({next: (res) => {this.balance = res.balance},
    error: (res) => console.log("error", res)
    })
  }
}
