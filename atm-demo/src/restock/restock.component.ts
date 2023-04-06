import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.sass']
})
export class RestockComponent {

 amount: number = 55;

  constructor(private fb: FormBuilder ) {
      this.createForm();
  }

  createForm() {
      this.withdrawalForm = this.fb.group({
          amount: ['', Validators.required ]
      });

  }

  withdrawalForm = new FormGroup ({
      amount: new FormControl()

  });












}
