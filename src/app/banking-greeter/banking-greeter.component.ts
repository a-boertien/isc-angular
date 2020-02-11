import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banking-greeter',
  templateUrl: './banking-greeter.component.html',
  styles: []
})
export class BankingGreeterComponent implements OnInit {

  @Input()
  companyName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
