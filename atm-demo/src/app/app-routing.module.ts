import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from 'src/overview/overview.component';
import { RestockComponent } from 'src/restock/restock.component';
import { WithdrawlComponent } from 'src/withdrawl/withdrawl.component';

const routes: Routes = [

  { path: 'overview-component', component: OverviewComponent },
  { path: 'withdraw-component', component: WithdrawlComponent},
  { path: 'restock-component', component: RestockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
