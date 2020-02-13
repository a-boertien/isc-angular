import { Component, OnInit, OnDestroy } from '@angular/core';
import { PayeesDaoService } from '../payees-dao.service';
import { Subscription, Observable } from 'rxjs';
import { Payee } from '..';

@Component({
  selector: 'payees-manager',
  template: `
    <div class="row">
      <div class="col">
        <h2>Payees</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <!-- <payees-search-ngmodel></payees-search-ngmodel> -->
        <payees-list [payees]="payees"></payees-list>
        <!-- <payees-list-observable [payees]="payees$"></payees-list-observable> -->
      </div>
    </div>
  `,
  styles: []
})
export class PayeesManagerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subs: Subscription[] = [];
  payees: Payee[] = [];
  payees$: Observable<Payee[]>;

  constructor(private dao: PayeesDaoService) {}

  ngOnInit(): void {
    const obs = this.dao.getAllPayees();
    this.payees$ = obs;

    this.subs.push(
      obs.subscribe(
        payees => {
          this.payees = payees;
        },
        error => {
          console.error('The DAO reported an error: ', error.message);
        }
      )
    );

    /*
    setTimeout(() => {
      obs.subscribe(payees => {
        console.log('Payees: ', payees);
      });
    }, 10000)
    */

    this.dao.getPayeeById('500');
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  handleSearchPayees(foo) {
    console.log('PayeesManager: payeesSearch: ', foo);
  }
}
