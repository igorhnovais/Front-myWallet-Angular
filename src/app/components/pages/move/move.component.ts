import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/Transaction';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit{
  transaction!:Transaction;
  faEdit = faEdit;
  faTimes = faTimes;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get("id"));

     this.transactionService.getTransaction(id)
     .subscribe({next: (item) => {this.transaction = item, console.log("testeee", this.transaction)}
      
     , error: (res) => console.log(res)})
  }

  async removeHandler(id: number){
    await this.transactionService.removeTransaction(id).subscribe();
    // botar a msg de sucesso aula 37
    this.router.navigate(["/home"])
  }
}
