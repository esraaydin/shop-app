import {Injectable} from '@angular/core';
import {User} from '../login/user';

@Injectable()
export class AccountService {
  constructor() {
  }

  loggedIn = false;

  login(user: User): boolean {
    // tslint:disable-next-line:triple-equals
    if (user.userName == 'Esra' && user.password == '12345') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.userName);
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  isLoggedIn() {
    return this.loggedIn;
  }

  // tslint:disable-next-line:typedef
  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}
