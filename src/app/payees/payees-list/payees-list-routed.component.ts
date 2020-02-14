import { Component, OnInit } from '@angular/core';
import { PayeesDaoService } from '../payees-dao.service';
import { Payee } from '..';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payees-list-routed',
  template: `
    <payees-list [payees]="payees"></payees-list>
  `,
  styles: []
})
export class PayeesListRoutedComponent implements OnInit {
  payees: Payee[];

  constructor(private dao: PayeesDaoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dao.getAllPayees().subscribe(payees => (this.payees = payees));

    this.route.queryParamMap.subscribe(paramMap =>
      console.log('You searched on ', paramMap.get('searchText'))
    );
  }
}
