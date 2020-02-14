import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingGreeterComponent } from './banking-greeter/banking-greeter.component';
import { PayeesModule } from './payees/payees.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    BankingGreeterComponent,
    HomeComponent
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
