import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeesListComponent } from './payees-list/payees-list.component';
import { PayeesListRoutedComponent } from './payees-list/payees-list-routed.component';
import { PayeesDaoService } from './payees-dao.service';


const routes: Routes = [
  {
    path: 'payees',
    component: PayeesManagerComponent,
    children: [
      {
        path: 'search',
        component: PayeesSearchComponent,
      },
      {
        path: 'browse',
        component: PayeesListRoutedComponent
      },
      {
        path: ':id/detail'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeesRoutingModule { }
