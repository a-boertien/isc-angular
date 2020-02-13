import { Component, OnInit, Input } from '@angular/core';
import { Payee } from '..';

@Component({
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styleUrls: ['./payees-list.component.css'],
})
export class PayeesListComponent implements OnInit {
  @Input()
  payees: Payee[];

  constructor() {}

  ngOnInit() {
  }
}
