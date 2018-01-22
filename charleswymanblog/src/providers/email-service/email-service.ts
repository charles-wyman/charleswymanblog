import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EmailServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmailServiceProvider {

    constructor(public http: HttpClient) {
      console.log('Hello EmailServiceProvider Provider');
    }
  
    sendMail(info) {    
    return new Promise(resolve => {
        this.http.post('http://localhost:3000', info).subscribe(data => {
            resolve(data);
        }, 
        err => {
            resolve(err);
        });
    });
    
  }

}
