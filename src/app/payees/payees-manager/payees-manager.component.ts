import { Component, OnInit, OnDestroy } from '@angular/core';
import { PayeesDaoService } from '../payees-dao.service';
import { Subscription } from 'rxjs';

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
        <payees-list></payees-list>
      </div>
    </div>
  `,
  styles: []
})
export class PayeesManagerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subs: Subscription[] = [];

  constructor(private dao: PayeesDaoService) {}

  ngOnInit(): void {
    const obs = this.dao.getAllPayees();

    this.subs.push(
      obs.subscribe(
        payees => {
          console.log('Payees: ', payees);
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
