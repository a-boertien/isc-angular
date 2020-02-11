import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'isc-angular';
  appName = 'InterSystems Corp Awesome Angular App';
  x = 10;
  obj = {
    firstName : 'John'
  }

  greet() {
    return 'Hello!';
  }

}
