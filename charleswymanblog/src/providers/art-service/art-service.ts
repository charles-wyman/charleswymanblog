import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ArtServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArtServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ArtServiceProvider Provider');
  }
  
  getEntries() {    
    return new Promise(resolve => {
    this.http.get('assets/data/artEntries.json').subscribe(data => {
            resolve(data);
        },  
        err => {
            console.log(err);
        });
    });
  }

}
