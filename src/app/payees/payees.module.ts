import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';


@NgModule({
  declarations: [PayeesSearchComponent, PayeesManagerComponent],
  imports: [
    CommonModule,
    PayeesRoutingModule
  ],
  exports: [
    PayeesManagerComponent
  ]
})
export class PayeesModule { }
