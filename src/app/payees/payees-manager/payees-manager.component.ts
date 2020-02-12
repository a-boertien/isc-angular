import { Component, OnInit } from "@angular/core";
import { StarterService } from 'src/app/starter.service';

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
        <payees-search-ngmodel></payees-search-ngmodel>
      </div>
    </div>
  `,
  styles: []
})
export class PayeesManagerComponent implements OnInit {

  constructor(public starter: StarterService) {}

  ngOnInit(): void {}

  handleSearchPayees(foo) {
    console.log("PayeesManager: payeesSearch: ", foo);
  }
}
