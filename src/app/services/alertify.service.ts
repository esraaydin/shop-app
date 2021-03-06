import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable()
export class AlertifyService {

  constructor() { }

  // tslint:disable-next-line:typedef
  success(message: string){
    alertify.success(message);
  }

  // tslint:disable-next-line:typedef
  error(message: string){
    alertify.error(message);
  }

  // tslint:disable-next-line:typedef
  warning(message: string){
    alertify.warning(message);
  }
}
