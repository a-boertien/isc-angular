import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingGreeterComponent } from './banking-greeter/banking-greeter.component';
import { PayeesModule } from './payees/payees.module';

@NgModule({
  declarations: [
    AppComponent,
    BankingGreeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PayeesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
