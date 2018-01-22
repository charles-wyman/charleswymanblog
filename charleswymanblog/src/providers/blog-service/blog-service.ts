import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

/*
  Generated class for the BlogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogServiceProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello BlogServiceProvider Provider');
  }
  
  getEntries() {    
    return new Promise(resolve => {
    this.http.get('assets/data/blogEntries.json').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
    
  }

}
