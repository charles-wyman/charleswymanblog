import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlogPage } from '../blog/blog';
import { ArtPage } from '../art/art';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact'; 
import { CityServiceProvider } from '../../providers/city-service/city-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {        
    time = null;
    city : String;
    
    constructor(public navCtrl: NavController, public cityService : CityServiceProvider) {
        this.getCurrentTime();
        this.getLocation();
    }
    
    ionViewDidLoad() {
        
    }
    
     

    openPage(page) { 
  
        switch (page) {

            case 'BlogPage' :
                this.navCtrl.setRoot(BlogPage);
            break;

            case 'ArtPage' :
                this.navCtrl.setRoot(ArtPage);
            break;

            case 'AboutPage' :
                this.navCtrl.setRoot(AboutPage);
            break;

            case 'ContactPage' :
                this.navCtrl.setRoot(ContactPage);
            break;


        }
  
       
    };    
    
    getCurrentTime() {    
        setInterval(() => {
        this.time = new Date();        
        }, 1000);    
    };
    
    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
        }
        
        else {
            this.city = 'Unknown';
        }
    }
    
    showPosition(position) {
      
        this.cityService.getCity(position.coords).then(data => {
            this['city'] = data.toString();
        });
    }
  

}
