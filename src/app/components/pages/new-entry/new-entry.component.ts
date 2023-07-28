import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { NewTransaction } from 'src/app/newTransaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {
  transaction!: Transaction

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ){}

  async newEntry(newTransaction: NewTransaction){
    await this.transactionService.postNewTransaction(newTransaction).subscribe();
    this.router.navigate(["/home"]);
  }
}
