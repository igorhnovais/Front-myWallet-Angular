import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTransaction } from 'src/app/newTransaction';

@Component({
  selector: 'app-form-new-exit',
  templateUrl: './form-new-exit.component.html',
  styleUrls: ['./form-new-exit.component.css']
})
export class FormNewExitComponent {
  @Output() onSubmit = new EventEmitter<NewTransaction>()

  newTransactionForm!: FormGroup

  constructor(){ }

  ngOnInit(): void {
    this.newTransactionForm = new FormGroup({
      price: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    })
  }

  get price(){
    return this.newTransactionForm.get("price")!;
  }

  get description(){
    return this.newTransactionForm.get("description")!;
  }

  submit(){
    if(this.newTransactionForm.invalid){
      return;
    }

    this.onSubmit.emit(this.newTransactionForm.value);
  }
}
