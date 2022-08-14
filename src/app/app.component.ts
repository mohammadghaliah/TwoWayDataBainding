import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  ngOnInit(): void {}

  value: string;

  clearValue() {
    this.value = '';
  }

  nameChanged(arg) {
    console.log('modelchanged ' + arg);
  }

  name1Changed(arg) {
    console.log('name1Changed ' + arg.target.value);
    console.log(arg);
  }
}
