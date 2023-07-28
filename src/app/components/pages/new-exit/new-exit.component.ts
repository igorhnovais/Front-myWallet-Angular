import { Component } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { NewTransaction } from 'src/app/newTransaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-exit',
  templateUrl: './new-exit.component.html',
  styleUrls: ['./new-exit.component.css']
})
export class NewExitComponent {
  transaction!: Transaction

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ){}

  async newExit(newTransaction: NewTransaction){
    await this.transactionService.postNewTransactionExit(newTransaction).subscribe();
    this.router.navigate(["/home"]);
  }
}
