import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultValue = { hour: 13, minute: 30 };

  timeChangeHandler(event: any) {}

  invalidInputHandler() {}
}
