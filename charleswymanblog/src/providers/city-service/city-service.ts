import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { googleAPIresults} from '../../datamodels/googleAPIresults';


/*
  Generated class for the CityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CityServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CityServiceProvider Provider');
  }
 
  getCity(coords) {
    console.log(coords);
    return new Promise(resolve => {
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+coords.latitude+','+coords.longitude+'&key=AIzaSyBCalhKhAbA6EIpC0JqdqdeM_60LDkcWKE').subscribe((data : googleAPIresults) => {
        console.log(data.results);
        //return the formatted_address for the object that matched the types "political", "sublocality", and "sublocality_level_1"
        var foundMatch = false;
        var iter = 0;
        var selector = 0;
      
        
        do {
            if (data.results[iter].types[0] === 'locality' && data.results[iter].types[1] === 'political') {
                foundMatch = true;
                selector = iter;
            }
            iter++;
        } 
        
        while(!foundMatch && iter < data.results.length - 1); 
        var ret = data.results[selector].formatted_address;
    
        resolve(ret);
    }, err => {
        console.log(err);
    });
  });
    
  }
  

}
