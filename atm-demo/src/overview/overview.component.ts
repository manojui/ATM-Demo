import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent {

  constructor(){ }

  hundredNotesDispensed  : number = 10;
  fiftyNotesDispensed    : number = 10;
  twentyNotesDispensed   : number = 10;
  tenNotesDispensed      : number = 10;
  fiveNotesDispensed     : number = 10;
  oneNotesDispensed      : number = 10;

}
