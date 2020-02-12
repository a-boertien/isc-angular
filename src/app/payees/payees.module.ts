import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PayeesRoutingModule } from "./payees-routing.module";
import { PayeesSearchComponent } from "./payees-search/payees-search.component";
import { PayeesSearchNgModelComponent } from "./payees-search/payees-search-ngmodel.component";
import { PayeesManagerComponent } from "./payees-manager/payees-manager.component";

@NgModule({
  declarations: [
    PayeesSearchComponent,
    PayeesManagerComponent,
    PayeesSearchNgModelComponent
  ],
  imports: [CommonModule, FormsModule, PayeesRoutingModule],
  exports: [PayeesManagerComponent]
})
export class PayeesModule {}
