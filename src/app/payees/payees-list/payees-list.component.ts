import { Component, OnInit, Input } from '@angular/core';
import { Payee } from '..';
import * as lodash from 'lodash';

type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styles: [
    `
      thead th {
        cursor: pointer;
      }
    `
  ]
})
export class PayeesListComponent implements OnInit {
  @Input()
  payees: Payee[];

  sortConfig: {
    sortField: string;
    sortDirection: SortDirection;
  } = {
    sortDirection: 'asc',
    sortField: ''
  };

  constructor() {}

  ngOnInit() {}

  myCustomTrackBy(index, item) {
    return `${item.id} ${item.version}`;
  }

  handleHeaderClick(sortField: string) {
    let sortDirection: SortDirection = 'asc';

    if (
      sortField === this.sortConfig.sortField &&
      this.sortConfig.sortDirection === 'asc'
    ) {
      sortDirection = 'desc';
    }

    this.sortConfig = { sortField, sortDirection };

    this.payees = lodash.orderBy(
      this.payees,
      this.sortConfig.sortField,
      this.sortConfig.sortDirection
    );
  }
}
