import { Component, OnInit, Input } from '@angular/core';
import { Payee } from '..';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'payees-list-observable',
  templateUrl: './payees-list-observable.component.html',
  styles: []
})
export class PayeesListObservableComponent implements OnInit {
  @Input()
  payees: Observable<Payee[]>;
  displayPayees: Observable<Payee[]>;
  loaded = false;

  constructor() {}

  ngOnInit(): void {
    this.displayPayees = this.payees.pipe(
      tap(() => {
        console.log('Tapped');
        this.loaded = true;
      })
    );
  }
}
