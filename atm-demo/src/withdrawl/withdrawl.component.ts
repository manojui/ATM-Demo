import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { AtmHistoryService } from '../app/services/atm-history.service';
import { AtmStateService } from '../app/services/atm-state.service';
import { TransactionHistoryType } from '../app/enum/transaction-history-type.enum';


@Component({
  selector: 'app-withdrawl',
  templateUrl: './withdrawl.component.html',
  styleUrls: ['./withdrawl.component.sass']
})

export class WithdrawlComponent implements OnInit  {

    public withdrawlAmount: number = 0;
    public withdrawForm!: FormGroup;
    public withdrawlSuccessFull?: boolean | null;
  
    constructor(
      private atmHistoryService: AtmHistoryService,
      private atmStateService: AtmStateService
    ) { }
  
    ngOnInit(): void {
      this.withdrawForm = new FormGroup({
        withdrawlAmount: new FormControl(0, Validators.min(0))
      });
    }
  
    public processWithdrawl(): void {
      this.withdrawlAmount = this.withdrawForm.controls['withdrawlAmount'].value;
      this.withdrawlSuccessFull = this.atmStateService.processWithdrawl(this.withdrawlAmount)
      this.logHistory();
      this.withdrawForm.controls['withdrawlAmount'].setValue(0);
    }
  
    private logHistory(): void {
      this.atmHistoryService.addHistory({ 
        type: TransactionHistoryType[TransactionHistoryType.withdrawl], 
        message: 'Attempt to Withdraw of ' + this.withdrawlAmount + ((this.withdrawlSuccessFull) ? ' was a success' : ' failed, insufficient funds'),
        date: new Date() 
      });
    }
}
