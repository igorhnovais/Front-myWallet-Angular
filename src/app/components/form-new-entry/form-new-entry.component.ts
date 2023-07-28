import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTransaction } from 'src/app/newTransaction';

@Component({
  selector: 'app-form-new-entry',
  templateUrl: './form-new-entry.component.html',
  styleUrls: ['./form-new-entry.component.css']
})
export class FormNewEntryComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<NewTransaction>()

  newTransactionForm!: FormGroup

  constructor(){ }

  ngOnInit(): void {
    this.newTransactionForm = new FormGroup({
      price: new FormControl("", [Validators.required])
    })
  }

  get price(){
    return this.newTransactionForm.get("price")!;
  }

  submit(){
    if(this.newTransactionForm.invalid){
      return;
    }

    this.onSubmit.emit(this.newTransactionForm.value);
  }
}
