import { Component, OnInit, Input } from '@angular/core';
import { Payee } from '..';
import { Observable, Subject, combineLatest } from 'rxjs';
import { tap, map, startWith } from 'rxjs/operators';
import * as lodash from 'lodash';

type SortDirection = 'asc' | 'desc';

interface SortConfig {
  sortField: string;
  sortDirection: SortDirection;
}

@Component({
  selector: 'payees-list-observable',
  templateUrl: './payees-list-observable.component.html',
  styles: [
    `
      thead th {
        cursor: pointer;
      }
    `
  ]
})
export class PayeesListObservableComponent implements OnInit {
  @Input()
  payees: Observable<Payee[]>;
  displayPayees: Observable<Payee[]>;
  loaded = false;

  sortConfig: SortConfig = {
    sortDirection: 'asc',
    sortField: ''
  };

  sortSubject = new Subject<SortConfig>();

  constructor() {}

  ngOnInit(): void {
    const sortObservable = this.sortSubject
      .asObservable()
      .pipe(startWith(this.sortConfig));
    const mergedObservable = combineLatest([sortObservable, this.payees]);

    this.displayPayees = mergedObservable.pipe(
      tap(() => {
        console.log('Tapped');
        this.loaded = true;
      }),
      map(([sortConfig, payees]) => {
        return lodash.orderBy(
          payees,
          sortConfig.sortField,
          sortConfig.sortDirection
        );

        // Plain JS (without an actual sort() routine)
        /*
        const sortedPayees = [...payees];
        sortedPayees.sort((a, b) => 1);
        return this.sortConfig.sortDirection === 'asc'
          ? sortedPayees
          : sortedPayees.reverse();
          */
      })
    );
  }

  handleHeaderClick(sortField: string) {
    console.log(`Sorting on ${sortField}`);
    let sortDirection: SortDirection = 'asc';

    if (
      sortField === this.sortConfig.sortField &&
      this.sortConfig.sortDirection === 'asc'
    ) {
      sortDirection = 'desc';
    }

    this.sortConfig = { sortField, sortDirection };

    this.sortSubject.next(this.sortConfig);
  }
}
