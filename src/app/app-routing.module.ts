import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesManagerComponent } from './payees/payees-manager/payees-manager.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
