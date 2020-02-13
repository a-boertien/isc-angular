import { Component, OnInit } from '@angular/core';
import { PayeesDaoService } from '../payees-dao.service';

@Component({
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styleUrls: ['./payees-list.component.css'],
})
export class PayeesListComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
