import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service'; 
import { Transaction } from 'src/app/Transaction';
import { environment } from 'src/environments/environments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allTransactions: Transaction[] = [];
  balance: any;
  transactions: Transaction[] = [];
  baseApiUrl = environment.baseApiUrl;
  faSearch = faSearch;
  searchTerm: string = "";


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
    .subscribe({next: (res) => {this.transactions = res.slice(-6),this.allTransactions = res}
      
      , error: (res) => console.log("error", res)})

    this.transactionService.getBalance(token)
    .subscribe({next: (res) => {this.balance = res.balance},
    error: (res) => console.log("error", res)
    })
  }

  search(e: Event): any{
    const target = e.target as HTMLInputElement;
    const value = Number(target.value.trim());

    if(!value){
      return this.transactions = [...this.allTransactions];
      
    } else {
      this.transactions = this.allTransactions.filter((transaction) => {
        return transaction.price == value
      });
    }
  }
}

