import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'payees-search',
  templateUrl: './payees-search.component.html',
  styleUrls: ['./payees-search.component.css']
})
export class PayeesSearchComponent implements OnInit {

  searchText: string;

  @Output()
  searchPayees = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleButtonClick(event) {
    console.log(`You are searching on ${this.searchText}`);
    // console.log('You are searching on ', this.searchText);

    this.searchPayees.emit(this.searchText);
  }

  handleTextBlur(event: FocusEvent) {
    this.searchText = (<HTMLInputElement>event.target).value;
  }

  handleTextInput(event: InputEvent) {
    this.searchText = (<HTMLInputElement>event.target).value;
  }

}
