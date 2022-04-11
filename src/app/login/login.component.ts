import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {AccountService} from '../services/account.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = new User() ;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
 login(form: NgForm){
    this.accountService.login(this.model);
 }
}
