import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service'; 
import { Transaction } from 'src/app/Transaction';
import { environment } from 'src/environments/environments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allTransactions: Transaction[] = [];
  transactions: Transaction[] = [];
  baseApiUrl = environment.baseApiUrl;
  faSearch = faSearch;
  searchTerm: string = "";

  constructor(private transactionService: TransactionService){}

  ngOnInit(): void {

    this.transactionService.getAllTransactions()
    .subscribe({next: (res) => {this.transactions = res, this.allTransactions = res}
      
      , error: (res) => console.log("error", res)})

    // this.transactionService.getAllTransactions()
    // .subscribe((items) => {
      
    //   const data = items.data
    //   data.map((item) => {
    //     item.created = new Date(item.created!).toLocaleDateString("pt-BR");

    //     this.allTransactions = data;
    //     this.transactions = data;

    //     console.log("feli", items)
    //   })
    // });
  }

  search(e: Event): void{
    const target = e.target as HTMLInputElement;
    const value = Number(target.value);
    console.log(value)

    this.transactions = this.allTransactions.filter((transaction) => {
      return transaction.price == value
    });
  }
}

