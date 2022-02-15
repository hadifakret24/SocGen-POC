import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryComponent} from "./history/history.component";
import { TransfersComponent} from "./transfers/transfers.component";

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'transfers',
    component: TransfersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
