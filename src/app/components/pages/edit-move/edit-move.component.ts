import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Edit } from 'src/app/Edit';


@Component({
  selector: 'app-edit-move',
  templateUrl: './edit-move.component.html',
  styleUrls: ['./edit-move.component.css']
})
export class EditMoveComponent implements OnInit {
  transaction!: Transaction
  @Input() btnText: string = "Editar";

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.transactionService.getTransaction(id).subscribe(
      {next: (item) => {this.transaction = item}}
    )
  }

  async newEdit(edit: Edit){ 
    const id = this.transaction.id;
    await this.transactionService.editTransaction(id, edit).subscribe();
    this.router.navigate(["/home"])
  }
}
