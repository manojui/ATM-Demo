import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.sass']
})
export class RestockComponent {


  constructor(private fb: FormBuilder ) { }
}
