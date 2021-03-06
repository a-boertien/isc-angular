import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeesSearchNgModelComponent } from './payees-search/payees-search-ngmodel.component';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesListComponent } from './payees-list/payees-list.component';
import { PayeesListObservableComponent } from './payees-list/payees-list-observable.component';
import { PayeesListRoutedComponent } from './payees-list/payees-list-routed.component';

@NgModule({
  declarations: [
    PayeesSearchComponent,
    PayeesManagerComponent,
    PayeesSearchNgModelComponent,
    PayeesListComponent,
    PayeesListObservableComponent,
    PayeesListRoutedComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, PayeesRoutingModule],
  exports: [PayeesManagerComponent],
})
export class PayeesModule {}
