import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'payees-search-ngmodel',
  templateUrl: './payees-search-ngmodel.component.html',
  styleUrls: ['./payees-search.component.css'],
})
export class PayeesSearchNgModelComponent implements OnInit {
  searchText = '';

  @Output()
  searchPayees = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

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

  getStyleConfig() {
    return { display: this.searchText.length > 2 ? 'block' : 'none' };
  }

  get displayValue() {
    return this.searchText.length > 2 ? 'block' : 'none';
  }
}
