import { Component, QueryList, ViewChildren } from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
	selector: 'app-root',
	template: `
    <app-alert ok="Next" (close)="showAlert(2)">
      Step 1: Demographics<br/>
      First Name: <input type="text"><br/>
      Last Name: <input type="text"><br/>
    </app-alert>
    <app-alert ok="Next" (close)="showAlert(3)">
      Step 2: Criminal Information
      <label>Have you been filed with any case in last 5 year?</label><br/>

    </app-alert>
    <app-alert ok="Close">
      Step 3: Build app
    </app-alert>
	  <button (click)="showAlert(1)">Show steps</button>`
})

export class AppComponent {
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  alertsArr = [];

  ngAfterViewInit() {
    this.alertsArr = this.alerts.toArray();
  }
  
  showAlert(step) {
    this.alertsArr[step - 1].show(); // step 1 is alert index 0
  }
}
