import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Edit } from 'src/app/Edit';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Edit>()
  @Input() btnText!: string;
  @Input() editData: Edit | null = null;

  editForm!: FormGroup

  ngOnInit(): void {
    this.editForm = new FormGroup({
      price: new FormControl("", [Validators.required]),
    })
  }

  get price(){
    return this.editForm.get("price")!;
  }

  submit(){
    if(this.editForm.invalid){
      return;
    }

    this.onSubmit.emit(this.editForm.value);
  }
}
