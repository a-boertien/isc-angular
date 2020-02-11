import { Component, OnInit } from "@angular/core";

@Component({
  selector: "payees-manager",
  template: `
    <div class="row">
      <div class="col">
        <h2>Payees</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <payees-search
          (searchPayees)="handleSearchPayees($event)"
        ></payees-search>
      </div>
    </div>
  `,
  styles: []
})
export class PayeesManagerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleSearchPayees(foo) {
    console.log("PayeesManager: payeesSearch: ", foo);
  }
}
