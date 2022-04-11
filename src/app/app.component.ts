import { Component } from '@angular/core';
import {AccountService} from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountService: AccountService) {}
  title = 'shop';

  // tslint:disable-next-line:typedef
  isLoggedin(){
    return this.accountService.isLoggedIn();
  }
  // tslint:disable-next-line:typedef
  logOut(){
    this.accountService.logOut();
  }
}
