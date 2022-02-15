import { Component } from '@angular/core';

import { AccountServices} from "./services/Account.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocGen-POC';

  constructor(private accountServices : AccountServices) {

    this.accountServices.initAccounts();

    console.log(this.accountServices.myAccount);
    console.log(this.accountServices.accountList);
  }
}
